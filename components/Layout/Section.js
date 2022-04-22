import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import { sectionStyles } from './layoutStyles.styles';

function Section({ children, background, color, ...restProps }) {
  return (
    <section {...restProps} css={sectionStyles(theme, background, color)}>
      {children}
    </section>
  );
}

Section.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Section.defaultProps = {
  background: 'transparent',
  color: 'inherit',
  children: '',
};

export default Section;
