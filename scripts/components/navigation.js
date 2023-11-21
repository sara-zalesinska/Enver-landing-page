const setupNavigation = () => {
  const hamburgerBtn = document.querySelector('.hamburger');
  const closeNavBtn = document.querySelector('.close-menu-btn');
  const navigation = document.querySelector('.nav');
  const navLink = document.querySelectorAll('.nav__link');

  function handleNav() {
    navigation.classList.toggle('nav--active');
    setOverflow();
  }

  function setOverflow() {
    navigation.classList.contains('nav--active')
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }

  hamburgerBtn.addEventListener('click', handleNav);
  closeNavBtn.addEventListener('click', handleNav);
  navLink.forEach((element) => {
    element.addEventListener('click', function closeNav() {
      navigation.classList.remove('nav--active');
      setOverflow();
    });
  });
};

export { setupNavigation };
