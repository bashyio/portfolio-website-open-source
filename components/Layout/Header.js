import PropTypes from 'prop-types';

function Header({ children, background, color, ...restProps }) {
  return (
    <header id="header" {...restProps}>
      {children}
    </header>
  );
}

Header.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
  background: 'transparent',
  color: 'inherit',
  children: '',
};

export default Header;
