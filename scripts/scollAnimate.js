let animatingElements = document.querySelectorAll('.ourClubComponent, .clubTitle, .stats, .contactContainer');

window.addEventListener('scroll', () => {
  animatingElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * (4 / 5)) element.classList.add('displayed');
  });
});
