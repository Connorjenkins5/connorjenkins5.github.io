const floatingTabs = document.getElementById('floating-tabs');
const headerHeight = document.querySelector('.header').offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    floatingTabs.classList.add('floating-tabs-top');
  } else {
    floatingTabs.classList.remove('floating-tabs-top');
  }
});
