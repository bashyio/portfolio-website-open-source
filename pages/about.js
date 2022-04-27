import { useEffect } from 'react';
import Head from 'next/head';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';

import Root from '../components/Root';
import { BigHeading } from '../components/Heading';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col } from '../components/Layout';
import Footer from '../components/Footer';
import SkillCloud from '../components/SkillCloud';
import {
  skillList,
  devNick,
  devName,
  siteMetaDescription,
  aboutMe,
} from '../constants/defaultValues';

export default function About() {
  const heading = `About ${devNick}`;

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <Root>
      <Head>
        <title>About - {devName}</title>
        <meta name="description" content={siteMetaDescription} />
        <meta property="og:title" content={`About - ${devName}`} />
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
      <Section className="pb-0">
        <Container>
          <Row>
            <Col fraction={1}>
              <Subtitle data-aos="fade-up">Get to Know Me</Subtitle>
              <BigHeading
                className="playful"
                data-aos-delay="200"
                data-aos="fade-up"
              >
                {heading.split('').map((h, i) => (
                  <span key={`h-${i}`}>{h}</span>
                ))}
              </BigHeading>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="pt-2">
        <Container>
          <Row>
            <Col fraction={3} size={2} data-aos-delay="400" data-aos="fade-up">
              <div className="about-text">
                <ReactMarkdown>{aboutMe}</ReactMarkdown>
              </div>
            </Col>
            <Col
              fraction={3}
              data-aos-delay="400"
              data-aos="fade-up"
              className="margin-top-mobile"
            >
              <div>
                <img
                  src="/assets/img/portrait.jpg"
                  alt={`Portrait of ${devName}`}
                  className="portrait"
                />
              </div>
              <div>
                <SkillCloud className="mt-4" skillList={skillList} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </Root>
  );
}
