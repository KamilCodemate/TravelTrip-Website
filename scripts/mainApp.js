//Main Props /////////////////////////////////////
const scrollToChange = 1; // - Defines the amount of scroll down units to add shadow to top menu

//Main Props /////////////////////////////////////

//Functions /////////////////////////////////////

const setShadowProperty = (element) => {
  element.classList.add('shadowed');
};

const removeShadowProperty = (element) => {
  element.classList.remove('shadowed');
};
// Functions /////////////////////////////////////

document.addEventListener('scroll', () => {
  window.pageYOffset > scrollToChange
    ? setShadowProperty(document.querySelector('.navbar'))
    : removeShadowProperty(document.querySelector('.navbar'));
});
