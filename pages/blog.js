import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Aos from 'aos';
import { format } from 'date-fns';

import Root from '../components/Root';
import Footer from '../components/Footer';
import { BigHeading, H3 } from '../components/Heading';
import Button from '../components/Buttons';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col, Spacing } from '../components/Layout';

import {
  devName,
  devNick,
  siteMetaDescription,
  blogList,
  blogDescription,
} from '../constants/defaultValues';

export default function Blog() {
  const heading = `${devNick}’s Blog`;

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <Root>
      <Head>
        <title>Blog - {devName}</title>
        <meta name="description" content={siteMetaDescription} />
        <meta property="og:title" content={`Blog - ${devName}`} />
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
              <Subtitle data-aos="fade-up">My Thoughts</Subtitle>
              <BigHeading
                className="playful"
                data-aos-delay="200"
                data-aos="fade-up"
              >
                {heading.split('').map((h, i) => (
                  <span key={`h-${i}`}>{h}</span>
                ))}
              </BigHeading>
              <p className="big-text-1" data-aos="fade-up" data-aos-delay="400">
                {blogDescription}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="pb-0" data-aos="fade-up" data-aos-delay="600">
        <Container>
          {blogList.map((blog, index) => (
            <Row key={`blog-${index}`} className="mb-5">
              <Col fraction={1}>
                <H3 className="mb-0">
                  <Link href={`/blog/${blog.uri}`}>
                    <a>{blog.title}</a>
                  </Link>
                </H3>
                <small className="mb-1 fade-text">
                  {format(
                    new Date(blog.publishDateTime),
                    'yyyy-MM-dd KK:mm aaa'
                  )}
                </small>
                <p>{blog.shortDescrip}</p>
                <Button href={`/blog/${blog.uri}`} color="primaryOutline">
                  Read More
                </Button>
              </Col>
            </Row>
          ))}
          <Spacing />
          <Row>
            <hr />
          </Row>
        </Container>
      </Section>
      <Footer />
    </Root>
  );
}
