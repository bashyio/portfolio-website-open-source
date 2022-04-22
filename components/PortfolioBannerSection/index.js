/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Section, Container, Spacing, Row, Col } from '../Layout';
import { BigHeading } from '../Heading';
import Subtitle from '../Subtitle';
import portfolioBannerStyles from './PortfolioBanner.styles';
import theme from '../../constants/theme';

function PortfolioBannerSection({ title, shortDescrip, type }) {
  return (
    <div css={portfolioBannerStyles(theme)}>
      <Section>
        <Container>
          <Spacing />
          <Row>
            <Col fraction={2}>
              <Subtitle data-aos="fade-down" data-aos-delay="300">
                {type}
              </Subtitle>
              <BigHeading data-aos="fade-up" data-aos-delay="300">
                <>
                  {title.split('').map((t, index) => (
                    <span key={`h-${index}`}>{t}</span>
                  ))}
                </>
              </BigHeading>
            </Col>
            <Col fraction={2}>
              <div
                className="align-l"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <p className="big-text-3 short-descrip">{shortDescrip}</p>
              </div>
            </Col>
          </Row>
          <Spacing size={2} />
        </Container>
      </Section>
    </div>
  );
}

PortfolioBannerSection.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  shortDescrip: PropTypes.string,
};
PortfolioBannerSection.defaultProps = {
  title: '',
  type: '',
  shortDescrip: '',
};
export default memo(PortfolioBannerSection);
