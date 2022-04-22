import { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import parallaxSectionStyles from './ParallaxSection.styles';
import { fileBaseUrl } from '../../constants/defaultValues';

function ParallaxSection({ image }) {
  useEffect(() => {
    document.querySelector('body').classList.add('parallax-page');

    return () => {
      document.querySelector('body').classList.remove('parallax-page');
    };
  });
  return (
    <div
      className="parallax-section"
      css={parallaxSectionStyles(`${fileBaseUrl}${image}`)}
    />
  );
}

ParallaxSection.propTypes = {
  image: PropTypes.string,
};
ParallaxSection.defaultProps = {
  image: '',
};
export default memo(ParallaxSection);
