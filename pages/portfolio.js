import Root from '../components/Root';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import { BigHeading } from '../components/Heading';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col } from '../components/Layout';

import {
  devName,
  portfolioFilters,
  portfolioGridData,
  portfolioDescription,
} from '../constants/defaultValues';

export default function Portfolio() {
  const heading = 'Portfolio';

  return (
    <Root title={`Portfolio - ${devName}`} description={portfolioDescription}>
      <Section data-aos="fade-up" className="pb-0">
        <Container>
          <Row>
            <Col fraction={1}>
              <Subtitle data-aos="fade-up">What I Do</Subtitle>
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
