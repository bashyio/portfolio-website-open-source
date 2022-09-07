/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import throttle from 'lodash/throttle';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { CgArrowAlignH } from 'react-icons/cg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import globalStyles from '../constants/globalStyles';
import { devName } from '../constants/defaultValues';
import LoadingScreen from '../components/LoadingScreen';
import { cursorLink, fixedNav } from '../helpers';

function MyApp({ Component, pageProps }) {
  const cursorRef = useRef(null);
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(router.asPath);

  useEffect(() => {
    Aos.init({
      offset: 60,
      duration: 1000,
    });

    const refreshAOS = () => {
      Aos.refresh();

      setTimeout(() => {
        Aos.refresh();
      }, 1000);
    };

    window.addEventListener(
      'scroll',
      throttle(fixedNav, 100, { leading: true, trailing: true })
    );
    window.addEventListener('resize', refreshAOS);
    return () => {
      window.removeEventListener(
        'scroll',
        throttle(fixedNav, 100, { leading: true, trailing: true })
      );
      window.removeEventListener('resize', refreshAOS);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrl]);

  useEffect(() => {
    const updateUrl = (url) => {
      setCurrentUrl(url);
    };

    router.events.on('routeChangeComplete', updateUrl);

    return () => {
      router.events.off('routeChangeComplete', updateUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Head>
        <title>{devName}</title>
      </Head>
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
      <div className="cursor" ref={cursorRef} style={{}}>
        <div className="cursor-inside">
          <CgArrowAlignH />
        </div>
      </div>
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
