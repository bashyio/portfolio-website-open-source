import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import { contentStyles, lineStyles } from './Subtitle.styles';

function Subtitle({ color, align, children, ...restProps }) {
  return (
    <div {...restProps} css={contentStyles(theme, color)}>
      {(align === 'left' || align === 'center') && (
        <span
          css={lineStyles(
            theme,
            color,
            align === 'center' ? 'leftCenter' : 'left'
          )}
        />
      )}
      {children}
      {(align === 'right' || align === 'center') && (
        <span
          css={lineStyles(
            theme,
            color,
            align === 'center' ? 'rightCenter' : 'right'
          )}
        />
      )}
    </div>
  );
}

Subtitle.propTypes = {
  color: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
Subtitle.defaultProps = {
  color: 'primary',
  align: 'left',
  children: '',
};

export default Subtitle;
