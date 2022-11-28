import { NavLink } from 'react-router-dom';

const Logo = ({ logo, className, ...props }) => {
  return (
    <div className={className} {...props}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'rgba(0,0,0,0.6)' : 'black',
        })}
      >
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
