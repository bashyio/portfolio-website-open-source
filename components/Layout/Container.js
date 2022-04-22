import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import { containerStyles } from './layoutStyles.styles';

function Container({
  fullWidth,
  children,
  className,
  background,
  color,
  ...restProps
}) {
  return (
    <div
      {...restProps}
      className={`container${className ? ` ${className}` : ''}`}
      css={containerStyles(theme, fullWidth, background, color)}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  fullWidth: PropTypes.bool,
  background: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Container.defaultProps = {
  fullWidth: false,
  background: 'transparent',
  className: '',
  color: 'inherit',
  children: '',
};

export default Container;
