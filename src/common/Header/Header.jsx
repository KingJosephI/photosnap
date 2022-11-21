import { Link } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
