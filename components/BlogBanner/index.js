import { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../Layout';
import { H1 } from '../Heading';
import blogBannerStyles from './BlogBanner.styles';
import theme from '../../constants/theme';
import { fileBaseUrl } from '../../constants/defaultValues';

function BlogBanner({ title, dateTime, image }) {
  return (
    <div css={blogBannerStyles(theme)}>
      <Row>
        <Col fraction={1} className="align-c blog-header">
          <p className="date mb-1" data-aos="fade-up">
            {dateTime}
          </p>
          <H1 data-aos="fade-up">{title}</H1>
        </Col>
        <Col fraction={1} className="align-c">
          <img src={`${fileBaseUrl}${image}`} alt={title} />
        </Col>
      </Row>
    </div>
  );
}

BlogBanner.propTypes = {
  title: PropTypes.string,
  dateTime: PropTypes.string,
  image: PropTypes.string,
};
BlogBanner.defaultProps = {
  title: '',
  dateTime: '',
  image: '',
};
export default memo(BlogBanner);
