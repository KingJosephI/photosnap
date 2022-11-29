import InviteButton from '../InviteButton/InviteButton';
import MenuItem from './MenuItem';

const NavBar = ({ ...props }) => {
  const menu = [
    {
      id: 1,
      path: '/stories',
      name: 'Stories',
    },
    {
      id: 2,
      path: '/features',
      name: 'Features',
    },
    {
      id: 3,
      path: '/pricing',
      name: 'Pricing',
    },
  ];
  return (
    <nav {...props}>
      <ul className="header__menu">
        {menu.map(({ name, path, id }) => (
          <MenuItem name={name} path={path} key={id} />
        ))}
      </ul>
      <InviteButton className="header__invite-button" />
    </nav>
  );
};

export default NavBar;
