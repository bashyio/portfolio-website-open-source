/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import Aos from 'aos';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import TopMenu from './TopMenu';
import LoadingScreen from './LoadingScreen';
import { PageMain } from './Layout';
import theme from '../constants/theme';
import { fixedNav } from '../helpers';
import 'aos/dist/aos.css';

function Root({ children }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 100);

    Aos.init({
      offset: 80,
      duration: 600,
    });

    setTimeout(() => {
      Aos.refresh();
    }, 3000);

    window.addEventListener(
      'scroll',
      throttle(fixedNav, 100, { leading: true, trailing: true })
    );

    window.addEventListener('resize', () => {
      Aos.refresh();

      setTimeout(() => {
        Aos.refresh();
      }, 1000);
    });
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.colors.primary} />
        <link rel="apple-touch-icon" href="/apple-touch-icon-180.png" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/apple-touch-icon-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@bashy_io" />
        <meta name="twitter:creator" content="@bashy_io" />
      </Head>
      <>
        <TopMenu setShowLoading={setShowLoading} />
        <PageMain>{!showLoading && <>{children}</>}</PageMain>
        <CSSTransition
          in={showLoading}
          timeout={300}
          classNames="opacity-transition"
          unmountOnExit
        >
          <LoadingScreen />
        </CSSTransition>
      </>
    </>
  );
}

Root.propTypes = {
  children: PropTypes.node,
};
Root.defaultProps = {
  children: <p />,
};

export default Root;
