import { Logo, NavBar, InviteButton } from './components';
import logo from '../../../../assets/shared/desktop/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Logo logo={logo} className="header__logo" />
      <NavBar />
      <InviteButton className="header__invite-button" />
      <button className="header__hamburger"></button>
    </header>
  );
};

export default Header;
