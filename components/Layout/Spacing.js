import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import { spacingStyles } from './layoutStyles.styles';

function Spacing({ size, ...restProps }) {
  return <div {...restProps} css={spacingStyles(theme, size)} />;
}

Spacing.propTypes = {
  size: PropTypes.number,
};

Spacing.defaultProps = {
  size: 1,
};

export default Spacing;
