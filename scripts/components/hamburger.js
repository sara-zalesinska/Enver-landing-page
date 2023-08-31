
const setupHamburgerMenu = () => {
  const hamburgerBtn = document.querySelector('.hamburger');
  const closeNavBtn = document.querySelector('.close-menu');
  const navigation = document.querySelector('.nav');

  function openNav() {
    navigation.style.visibility = "visible"
    closeNavBtn.style.visibility = "visible"
    hamburgerBtn.visibility = "hidden"
  }

  function closeNav() {
    navigation.style.visibility = "hidden"
    closeNavBtn.style.visibility = "hidden"
    hamburgerBtn.style.visibility = "visible"
  }

  hamburgerBtn.addEventListener('click',openNav);
  closeNavBtn.addEventListener('click', closeNav);
}

export {
    setupHamburgerMenu,
};