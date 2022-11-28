import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ path, name, ...props }) => {
  return (
    <li {...props}>
      <NavLink
        className="header__link"
        to={path}
        style={({ isActive }) => ({
          color: isActive ? 'rgba(0,0,0,0.6)' : 'black',
        })}
      >
        {name}
      </NavLink>
    </li>
  );
};
MenuItem.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};
export default MenuItem;
