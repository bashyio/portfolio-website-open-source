import PropTypes from 'prop-types';

function PageMain({ children, background, color, ...restProps }) {
  return (
    <main {...restProps} id="main">
      {children}
    </main>
  );
}

PageMain.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

PageMain.defaultProps = {
  background: 'transparent',
  color: 'inherit',
  children: '',
};

export default PageMain;
