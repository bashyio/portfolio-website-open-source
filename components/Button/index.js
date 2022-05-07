/* eslint-disable react/button-has-type */
import Link from 'next/link';
import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import buttonStyles from './Button.styles';

function Button({
  color,
  showIconOnHover,
  externalLink,
  leftIcon,
  fullWidth,
  children,
  href,
  type,
  ...restProps
}) {
  if (href) {
    return (
      <>
        {externalLink && (
          <a
            {...restProps}
            href={href}
            target="_blank"
            rel="noreferrer"
            css={buttonStyles(
              theme,
              color,
              fullWidth,
              leftIcon,
              showIconOnHover
            )}
          >
            {children}
          </a>
        )}
        {!externalLink && (
          <Link href={href}>
            <a
              {...restProps}
              css={buttonStyles(
                theme,
                color,
                fullWidth,
                leftIcon,
                showIconOnHover
              )}
            >
              {children}
            </a>
          </Link>
        )}
      </>
    );
  }

  return (
    <button
      {...restProps}
      type={type}
      css={buttonStyles(theme, color, fullWidth, leftIcon, showIconOnHover)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  leftIcon: PropTypes.bool,
  fullWidth: PropTypes.bool,
  showIconOnHover: PropTypes.bool,
  externalLink: PropTypes.bool,
  color: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
Button.defaultProps = {
  leftIcon: false,
  fullWidth: false,
  showIconOnHover: false,
  externalLink: false,
  color: 'primary',
  href: null,
  type: 'button',
  children: '',
};

export default Button;
