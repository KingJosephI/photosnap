import MenuItem from './MenuItem';

const NavBar = () => {
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
    <nav className="header__navigation">
      <ul className="header__menu">
        {menu.map(({ name, path, id }) => (
          <MenuItem name={name} path={path} key={id} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
