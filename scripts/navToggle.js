const toggler = document.querySelector('.toggleButton');

toggler.addEventListener('click', () => {
  const nav = document.querySelector('.navbar');
  const sticks = document.querySelectorAll('.toggleButton div');
  if (nav.classList.contains('navActive')) nav.classList.remove('navActive');
  else nav.classList.add('navActive');
});
