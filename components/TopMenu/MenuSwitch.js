import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import { menuSwitchStyles } from './TopMenu.styles';

function MenuSwitch({ open, toggleOpen }) {
  return (
    <button
      type="button"
      className="menu"
      css={menuSwitchStyles(theme, open)}
      onClick={() => {
        toggleOpen(!open);
      }}
    >
      <span>Menu Switch Here</span>
    </button>
  );
}

MenuSwitch.propTypes = {
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
};
MenuSwitch.defaultProps = {
  open: false,
  toggleOpen: () => {},
};

export default MenuSwitch;
