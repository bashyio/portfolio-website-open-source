import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import { rowStyles } from './layoutStyles.styles';

function Row({ children, className, background, color, ...restProps }) {
  return (
    <div
      {...restProps}
      className={`row${className ? ` ${className}` : ''}`}
      css={rowStyles(theme, background, color)}
    >
      {children}
    </div>
  );
}

Row.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

Row.defaultProps = {
  background: 'transparent',
  color: 'inherit',
  children: '',
  className: '',
};

export default Row;
