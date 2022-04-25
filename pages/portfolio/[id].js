/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { CSSTransition } from 'react-transition-group';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import { Keyboard, FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import Root from '../../components/Root';
import { H1, H2, H3 } from '../../components/Heading';
import Button from '../../components/Buttons';
import { Section, Container, Row, Col, Spacing } from '../../components/Layout';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import PortfolioBannerSection from '../../components/PortfolioBannerSection';
import ParallaxSection from '../../components/ParallaxSection';
import Subtitle from '../../components/Subtitle';

import {
  fileBaseUrl,
  portfolioType,
  portfolioSingle,
} from '../../constants/defaultValues';
import { preLoadImage } from '../../helpers';

export default function Portfolio() {
  const [imagesReady, setImagesReady] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const failedLoadImage = (func) => {
    func();
  };

  const imageList = [portfolioSingle.thumb, ...portfolioSingle.gallery];

  const allImages = [
    portfolioSingle.thumb,
    portfolioSingle.parallax,
    ...portfolioSingle.gallery,
  ];

  const startLoadImage = () => {
    Promise.all(allImages.map((p) => preLoadImage(fileBaseUrl + p.url)))
      .then(() => setImagesReady(true))
      .catch(() => failedLoadImage(startLoadImage));
  };

  useEffect(() => {
    startLoadImage();
  });

  useEffect(() => {
    Aos.refresh();
  }, []);

  useEffect(() => {
    if (imagesReady) {
      setTimeout(() => {
        setPageLoading(false);
      }, 200);
    }
  }, [imagesReady]);

  return (
    <Root>
      <Head>
        <title>{portfolioSingle.title}</title>
        <meta name="description" content={portfolioSingle.shortDescrip} />
        <meta property="og:title" content={portfolioSingle.title} />
        <meta
          property="og:description"
          content={portfolioSingle.shortDescrip}
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="/og-image-2.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </Head>
      <PortfolioBannerSection
        title={portfolioSingle.title}
        type={portfolioType[portfolioSingle.type]}
        shortDescrip={portfolioSingle.shortDescrip}
      />
      <ParallaxSection image={portfolioSingle.parallax.url} />
      <Spacing size={2} />
      <Section>
        <Container>
          <Row>
            <Col fraction={3} size={2} data-aos="fade-up">
              <H2 className="color-primary">Overview</H2>
              <div className="big-text-1">
                <ReactMarkdown>{portfolioSingle.content}</ReactMarkdown>
              </div>
            </Col>
            <Col fraction={3}>
              <div data-aos="fade-up" data-aos-delay="150">
                <H3 className="color-primary">Technologies</H3>
                <ul>
                  {portfolioSingle.tools.list.map((tool, index) => (
                    <li key={`tech-${index}`}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <Spacing />
                <H3 className="color-primary">Roles</H3>
                <ul>
                  {portfolioSingle.roles.list.map((tool, index) => (
                    <li key={`tech-${index}`}>{tool}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Spacing />
          <Row>
            <Col fraction={1}>
              <Button
                href={portfolioSingle.previewUrl}
                color="primaryOutline"
                externalLink
              >
                <span>View Project</span>
                <HiExternalLink />
              </Button>
            </Col>
          </Row>
          <Spacing />
        </Container>
      </Section>
      <Section>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          freeMode
          a11y
          updateOnWindowResize
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation
          modules={[Keyboard, FreeMode, Navigation]}
          breakpoints={{
            550: {
              slidesPerView: 1.4,
            },
            720: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 1.7,
            },
          }}
        >
          {imageList.map((image, index) => (
            <SwiperSlide key={`image-slide-${index}`}>
              <img
                src={image.url}
                className="swiper-image"
                alt={image.name || 'Slider Image'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-descrip">
          [Swipe to Slide, Use Arrow Keys or Click & Drag]
        </div>
      </Section>
      <Section data-aos="fade-up" className="pb-0">
        <Container>
          <Row>
            <hr />
          </Row>
          <Spacing size={3} />
          <Row>
            <Col fraction={1}>
              <Subtitle color="secondary">
                {portfolioType[portfolioSingle.type]}
              </Subtitle>
              <H1>{portfolioSingle.title}</H1>
              <Button
                href={portfolioSingle.previewUrl}
                color="secondaryOutline"
                externalLink
              >
                <span>Next Project</span>
                <HiChevronRight />
              </Button>
            </Col>
          </Row>
          <Spacing size={3} />
          <Row>
            <hr />
          </Row>
        </Container>
      </Section>
      <Footer />
      <CSSTransition
        in={pageLoading}
        timeout={300}
        classNames="opacity-transition"
        unmountOnExit
      >
        <LoadingScreen />
      </CSSTransition>
    </Root>
  );
}
