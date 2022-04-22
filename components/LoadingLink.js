import Link from 'next/link';
import PropTypes from 'prop-types';

export default function LoadingLink({ href, setShowLoading, children }) {
  return (
    <Link href={href}>
      <a onClick={() => setShowLoading(true)}>{children}</a>
    </Link>
  );
}

LoadingLink.propTypes = {
  href: PropTypes.string,
  setShowLoading: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
LoadingLink.defaultProps = {
  href: null,
  setShowLoading: () => {},
  children: '',
};
