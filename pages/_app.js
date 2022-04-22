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

  useEffect(() => {
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
      router.events.off('routeChangeError', stopLoading);
    };
  });

  // useEffect(() => {
  //   if (router.isReady) {
  //   }
  // }, [router.isReady]);

  const mouseLeave = () => {
    cursorRef.current.style.display = 'none';
  };

  const mouseEnter = () => {
    cursorRef.current.style.display = '';
  };

  useEffect(() => {
    document.body.addEventListener('mouseleave', mouseLeave);
    document.body.addEventListener('mouseenter', mouseEnter);

    return () => {
      document.body.removeEventListener('mouseleave', mouseLeave);
      document.body.removeEventListener('mouseenter', mouseEnter);
    };
  });

  return (
    <>
      <Global styles={globalStyles} />
      <div
        id="app-container"
        onMouseMove={(e) => {
          cursorRef.current.style.top = `${e.clientY}px`;
          cursorRef.current.style.left = `${e.clientX}px`;
        }}
        onMouseDown={() => {
          cursorRef.current.style.opacity = '.7';
        }}
        onMouseUp={() => {
          cursorRef.current.style.opacity = '';
        }}
        onMouseOver={(e) => {
          cursorLink(e, cursorRef.current);
        }}
      >
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
