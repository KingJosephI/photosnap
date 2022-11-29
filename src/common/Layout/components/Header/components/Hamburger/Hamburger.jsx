const Hamburger = ({ ...props }) => {
  const handleClick = () => {
    const hamburger = document.querySelector('.header__hamburger');
    const navBar = document.querySelector('.header__navigation');
    const menu = document.querySelector('.header__menu');
    const inviteButton = document.querySelector('.header__invite-button');
    hamburger.classList.toggle('close');
    navBar.classList.toggle('active');
    menu.classList.toggle('mobile');
    inviteButton.classList.add('display-invite-button');
  };

  return <button onClick={handleClick} {...props}></button>;
};

export default Hamburger;
