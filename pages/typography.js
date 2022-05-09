import { useState } from 'react';
import Link from 'next/link';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { CSSTransition } from 'react-transition-group';

import Root from '../components/Root';
import { H1, H2, H3, H4, H5, H6, BigHeading } from '../components/Heading';
import Button from '../components/Button';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col, Spacing } from '../components/Layout';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

import { devName, siteMetaDescription } from '../constants/defaultValues';

export default function Contact() {
  const [pageLoading, setPageLoading] = useState(false);

  return (
    <Root title={`Typography - ${devName}`} description={siteMetaDescription}>
      <Section data-aos="fade-up">
        <Container>
          <Row>
            <Col fraction={3}>
              <Subtitle>Subtitle Here</Subtitle>
              <BigHeading>Big Text 1</BigHeading>
            </Col>
            <Col fraction={3}>
              <div className="align-c">
                <Subtitle align="center" color="secondary">
                  Subtitle Here
                </Subtitle>
                <BigHeading>Big Text 2</BigHeading>
              </div>
            </Col>
            <Col fraction={3}>
              <div className="align-r">
                <Subtitle align="right" color="primary">
                  Subtitle Here
                </Subtitle>
                <BigHeading>Big Text 3</BigHeading>
              </div>
            </Col>
          </Row>
          <Spacing />
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col fraction={1}>
              <H1>Heading 1</H1>
              <H1>
                <a href="https://bashiruismail.io/">Heading Link</a>
              </H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <H4>Heading 4</H4>
              <H5>Heading 5</H5>
              <H6>Heading 6</H6>
              <hr />
              <p>Paragraph</p>
              <small>Small Text</small>
              <p>
                This is a{' '}
                <Link href="/about">
                  <a>regular Link Demo to About</a>
                </Link>{' '}
                fam. E dey work?
              </p>
              Here are links outside a paragraph: <br />
              <a href="https://bashiruismail.io/" className="secondary-link">
                Link Demo
              </a>
              <br />
              <a
                href="https://bashiruismail.io/"
                className="alt-link-secondary"
              >
                <span>Link Demo 2</span>
              </a>
              <br />
              <a href="https://bashiruismail.io/">
                <span>
                  <span>Link Demo 3</span>
                </span>
              </a>
              <Button
                color="primary"
                className="mb-6"
                fullWidth
                onClick={() => {
                  setPageLoading(true);
                  setTimeout(() => {
                    setPageLoading(false);
                  }, 5000);
                }}
              >
                Show Loading
              </Button>
              <p>
                <Button href="#" color="lightOutline" className="rubber-band">
                  lightOutline
                </Button>
              </p>
              <Button type="submit" color="primary" showIconOnHover>
                <span>Show Icon On Hover</span>
                <HiArrowRight />
              </Button>
              <Button color="secondary" leftIcon>
                <HiArrowLeft />
                <span>Test Icon 1</span>
              </Button>
              <Button color="secondary">
                <span>Test Icon 2</span>
                <HiArrowRight />
              </Button>
              <Button color="light">Light</Button>
              <Button href="#" color="primaryOutline">
                primaryOutline
              </Button>
              <Button href="#" color="secondaryOutline">
                secondaryOutline
              </Button>
              <p>
                Extra Text <br />
                Extra Text <br />
                Extra Text <br />
                Extra Text
              </p>
            </Col>
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
