import { memo } from 'react';
import PropTypes from 'prop-types';
import { HiArrowRight } from 'react-icons/hi';

import { Section, Container, Spacing, Row, Col } from '../Layout';
import { BigHeading } from '../Heading';
import Subtitle from '../Subtitle';
import Button from '../Button';
import homeBannerStyles from './HomeBanner.styles';
import theme from '../../constants/theme';
import { devName, devNick } from '../../constants/defaultValues';
import { scrollToElement } from '../../helpers';

import SvgImage from './SvgImage';

function HomeBannerSection({ scrollToRef }) {
  const devDescrip =
    'A well experienced UI/UX Designer and Web Developer. I enjoy Creating Delightful, Human-Centered & Unique Digital Experiences.';

  const scrollDown = () => {
    scrollToElement(scrollToRef?.current);
  };

  return (
    <div css={homeBannerStyles(theme)}>
      <Section>
        <Container>
          <Spacing size={2} />
          <Row>
            <Col fraction={2} className="text-column">
              <Subtitle>{devName}</Subtitle>
              <BigHeading
                data-aos="flip-down"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"
              >
                <>
                  Hi there,
                  <br />
                  I&rsquo;m <span>{devNick}</span>
                </>
              </BigHeading>
              <p
                className="intro"
                data-aos="fade-zoom-in"
                data-aos-offset="0"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                {devDescrip.split(' ').map((t, index) => (
                  <span key={`h-${index}`}>{t} </span>
                ))}
              </p>
              <div>
                <Button href="/contact" color="primary">
                  <span>Hire Me</span>
                  <HiArrowRight />
                </Button>
              </div>
            </Col>
            <Col fraction={2} className="svg-column">
              <div className="svg-container">
                <SvgImage />
              </div>
            </Col>
          </Row>
          <Spacing size={2} />
        </Container>
        <a className="scroll-text left" onClick={scrollDown}>
          SCROLL
        </a>
        <a className="landing-arrow left" onClick={scrollDown}>
          <span />
        </a>
        <a className="scroll-text right" onClick={scrollDown}>
          SCROLL
        </a>
        <a className="landing-arrow right" onClick={scrollDown}>
          <span />
        </a>
      </Section>
    </div>
  );
}

HomeBannerSection.propTypes = {
  scrollToRef: PropTypes.object,
};
HomeBannerSection.defaultProps = {
  scrollToRef: {},
};

export default memo(HomeBannerSection);
