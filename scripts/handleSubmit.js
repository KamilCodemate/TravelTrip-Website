const form = document.getElementById('contactForm');
const inputs = document.querySelectorAll('#contactForm input[type="text"], #contactForm input[type="email"], #contactForm textarea');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Successfully send question');
  inputs.forEach((element) => {
    element.value = '';
  });
});
