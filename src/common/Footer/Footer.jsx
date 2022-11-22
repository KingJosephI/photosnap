import { NavLink } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="social-media">
        <div>
          <i class="fa-brands fa-square-facebook"></i>
        </div>
        <div>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div>
          <i class="fa-brands fa-pinterest"></i>
        </div>
        <div>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>

      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Stories</NavLink>
        </li>
        <li>
          <NavLink>Features</NavLink>
        </li>
        <li>
          <NavLink>Pricing</NavLink>
        </li>
      </ul>

      <div>
        <a href="#">Get an invite</a>
        <div>
          <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div>Copyright 2019. AllRights Reserved</div>
    </footer>
  );
};

export default Footer;
