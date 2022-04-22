import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import { colStyles } from './layoutStyles.styles';

function Col({ children, background, color, fraction, size, ...restProps }) {
  return (
    <div
      {...restProps}
      css={colStyles(
        theme,
        background,
        color,
        parseInt(fraction, 10),
        parseInt(size, 10)
      )}
    >
      <div className="col-inner">{children}</div>
    </div>
  );
}

Col.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // eslint-disable-next-line consistent-return
  fraction: (props, propName, componentName) => {
    if (parseInt(props[propName], 10) > 4) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
          ` \`${componentName}\`. Validation failed.`
      );
    }
  },
  // eslint-disable-next-line consistent-return
  size: (props, propName, componentName) => {
    if (parseInt(props[propName], 10) > 3) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
          ` \`${componentName}\`. Validation failed.`
      );
    }
  },
};

Col.defaultProps = {
  background: 'transparent',
  color: 'inherit',
  children: '',
  fraction: 1,
  size: 1,
};

export default Col;
