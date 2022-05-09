import { HiChevronRight } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

import Root from '../../components/Root';
import { H3 } from '../../components/Heading';
import Button from '../../components/Button';
import { Section, Container, Row, Col, Spacing } from '../../components/Layout';
import Footer from '../../components/Footer';
import BlogBanner from '../../components/BlogBanner';

import { fileBaseUrl, blogSingle } from '../../constants/defaultValues';

export default function Blog() {
  return (
    <Root
      title={blogSingle.title}
      description={blogSingle.shortDescrip}
      banner={`${fileBaseUrl}${blogSingle.thumb.url}`}
    >
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
      <Section>
        <Container>
          <Row>
            <Col fraction={1}>
              <div className="blog-content">
                <ReactMarkdown linkTarget="_blank">
                  {blogSingle.content}
                </ReactMarkdown>
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
              <Button href={blogSingle.previewUrl} color="secondaryOutline">
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
