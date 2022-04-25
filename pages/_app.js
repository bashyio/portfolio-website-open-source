/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import globalStyles from '../constants/globalStyles';
import LoadingScreen from '../components/LoadingScreen';
import { cursorLink } from '../helpers';

function MyApp({ Component, pageProps }) {
  const cursorRef = useRef();
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const startLoading = (url) => {
      if (url !== router.asPath) {
        document.querySelector('html').style.overflow = 'hidden';
        setShowLoading(true);
      }
    };

    const stopLoading = () => {
      setTimeout(() => {
        document.querySelector('html').style.overflow = 'auto';
        setShowLoading(false);
      }, 100);
    };

    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
      router.events.off('routeChangeError', stopLoading);
    };
  });

  const mouseLeave = () => {
    cursorRef.current.style.display = 'none';
  };

  const mouseEnter = () => {
    cursorRef.current.style.display = '';
  };

  const mouseMove = (e) => {
    cursorRef.current.style.top = `${e.clientY}px`;
    cursorRef.current.style.left = `${e.clientX}px`;
  };

  const mouseDown = () => {
    cursorRef.current.style.opacity = '.7';
  };

  const mouseUp = () => {
    cursorRef.current.style.opacity = '';
  };

  const mouseOver = (e) => {
    cursorLink(e, cursorRef.current);
  };

  useEffect(() => {
    document.body.addEventListener('mouseleave', mouseLeave);
    document.body.addEventListener('mouseenter', mouseEnter);
    document.body.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mousedown', mouseDown);
    document.body.addEventListener('mouseup', mouseUp);
    document.body.addEventListener('mouseover', mouseOver);

    return () => {
      document.body.removeEventListener('mouseleave', mouseLeave);
      document.body.removeEventListener('mouseenter', mouseEnter);
      document.body.removeEventListener('mousemove', mouseMove);
      document.body.removeEventListener('mousedown', mouseDown);
      document.body.removeEventListener('mouseup', mouseUp);
      document.body.removeEventListener('mouseover', mouseOver);
    };
  });

  return (
    <>
      <Global styles={globalStyles} />
      <div id="app-container">
        <CSSTransition
          in={showLoading}
          timeout={1000}
          classNames="opacity-transition"
          unmountOnExit
        >
          <LoadingScreen />
        </CSSTransition>
        <Component {...pageProps} />
      </div>
      <div className="cursor" ref={cursorRef} style={{}} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
MyApp.defaultProps = {
  Component: <p />,
  pageProps: '',
};

export default MyApp;
