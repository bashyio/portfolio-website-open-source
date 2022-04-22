import { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../Layout';
import { H1 } from '../Heading';
import blogBannerStyles from './BlogBanner.styles';
import theme from '../../constants/theme';
import { fileBaseUrl } from '../../constants/defaultValues';

function BlogBanner({ title, dateTime, shortDescrip, image }) {
  return (
    <div css={blogBannerStyles(theme)}>
      <Row>
        <Col
          fraction={1}
          className="align-c blog-header"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h4 className="date">{dateTime}</h4>
          <H1>{title}</H1>
          <p>{shortDescrip}</p>
        </Col>
        <Col fraction={1} className="align-c">
          <img
            src={`${fileBaseUrl}${image}`}
            alt={title}
            data-aos="zoom-in-up"
            data-aos-delay="300"
          />
        </Col>
      </Row>
    </div>
  );
}

BlogBanner.propTypes = {
  title: PropTypes.string,
  dateTime: PropTypes.string,
  shortDescrip: PropTypes.string,
  image: PropTypes.string,
};
BlogBanner.defaultProps = {
  title: '',
  dateTime: '',
  shortDescrip: '',
  image: '',
};
export default memo(BlogBanner);
