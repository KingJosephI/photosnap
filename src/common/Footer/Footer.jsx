import { NavLink } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo-footer.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="footer__social-media">
        <div className="footer__icon">
          <i class="fa-brands fa-square-facebook"></i>
        </div>
        <div className="footer__icon">
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className="footer__icon">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="footer__icon">
          <i class="fa-brands fa-pinterest"></i>
        </div>
        <div className="footer__icon">
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>

      <ul className="footer__menu">
        <li>
          <NavLink to="/" className="footer__link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/stories" className="footer__link">
            Stories
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" className="footer__link">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className="footer__link">
            Pricing
          </NavLink>
        </li>
      </ul>

      <div className="footer__invite">
        <a href="#!" className="footer__invite-text">
          Get an invite
        </a>
        <div className="footer__arrow">
          <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div className="footer__copyright">
        Copyright 2019. AllRights Reserved
      </div>
    </footer>
  );
};

export default Footer;
