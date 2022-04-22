import PropTypes from 'prop-types';
import Link from 'next/link';

function TopNav({ toggleOpen, ...props }) {
  return (
    <div {...props} id="top-nav">
      <Link href="/" onClick={() => toggleOpen(false)}>
        <a>
          <div className="logo-image" />
        </a>
      </Link>
    </div>
  );
}

TopNav.propTypes = {
  toggleOpen: PropTypes.func,
};

TopNav.defaultProps = {
  toggleOpen: () => {},
};
export default TopNav;
