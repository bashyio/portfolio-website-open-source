import { useEffect } from 'react';
import Head from 'next/head';
import Aos from 'aos';

import Root from '../components/Root';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import { BigHeading } from '../components/Heading';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col, Spacing } from '../components/Layout';

import {
  devName,
  siteMetaDescription,
  portfolioFilters,
  portfolioGridData,
  portfolioDescription,
} from '../constants/defaultValues';

export default function Portfolio() {
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <Root>
      <Head>
        <title>Portfolio - {devName}</title>
        <meta name="description" content={siteMetaDescription} />
        <meta property="og:title" content={`Portfolio - ${devName}`} />
        <meta property="og:description" content={siteMetaDescription} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="/og-image-2.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </Head>
      <Spacing />
      <Section data-aos="fade-up" className="pb-0">
        <Container>
          <Row>
            <Col fraction={1}>
              <Subtitle data-aos="fade-up">What I Do</Subtitle>
              <BigHeading data-aos-delay="200" data-aos="fade-up">
                Portfolio
              </BigHeading>
              <p className="big-text-1" data-aos="fade-up" data-aos-delay="400">
                {portfolioDescription}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
      <Grid
        filters={portfolioFilters}
        data={portfolioGridData}
        className="pt-2"
        data-aos-delay="600"
      />
      <Footer />
    </Root>
  );
}
