import { useEffect } from 'react';
import Head from 'next/head';
import { HiChevronRight } from 'react-icons/hi';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

import Root from '../../components/Root';
import { H3 } from '../../components/Heading';
import Button from '../../components/Button';
import { Section, Container, Row, Col, Spacing } from '../../components/Layout';
import Footer from '../../components/Footer';
import BlogBanner from '../../components/BlogBanner';

import { blogSingle } from '../../constants/defaultValues';

export default function Blog() {
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <Root>
      <Head>
        <title>{blogSingle.title}</title>
        <meta name="description" content={blogSingle.shortDescrip} />
        <meta property="og:title" content={blogSingle.title} />
        <meta property="og:description" content={blogSingle.shortDescrip} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="/og-image-2.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </Head>
      <Section>
        <Container>
          <BlogBanner
            title={blogSingle.title}
            dateTime={format(
              new Date(blogSingle.publishDateTime),
              'yyyy-MM-dd KK:mm aaa'
            )}
            image={blogSingle.thumb.url}
          />
          <Spacing />
        </Container>
      </Section>
      <Section data-aos="fade-up">
        <Container>
          <Row>
            <Col fraction={1}>
              <div className="big-text-1">
                <ReactMarkdown>{blogSingle.content}</ReactMarkdown>
              </div>
            </Col>
          </Row>
          <Spacing />
        </Container>
      </Section>
      <Section data-aos="fade-up" className="pt-0 pb-0">
        <Container>
          <Row>
            <hr />
          </Row>
          <Spacing size={3} />
          <Row>
            <Col fraction={1}>
              <H3>{blogSingle.title}</H3>
              <Button
                href={blogSingle.previewUrl}
                color="secondaryOutline"
                externalLink
              >
                <span>Next Article</span>
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
    </Root>
  );
}
