const statsContainer = document.querySelector('.stats');

const checkDisplay = setInterval(() => {
  statsContainer.classList.forEach((element) => {
    console.log(element);
    if (element === 'displayed') animateStats();
  });
}, 50);

function animateStats() {
  clearInterval(checkDisplay);
  // const targetValues = [314000, 10921, 311, 94.3];
  const speed = 50; // less = faster
  // const incrementAmounts = [3140, 109.5, 3.12, 0.95];
  const incrementInterval = 20; // increment interval in miliseconds
  const numContainers = document.querySelectorAll('.statAmount');

  const targetValues = [...numContainers].map((element) => parseFloat(element.getAttribute('targetValue')));

  const incrementAmounts = targetValues.map((element) => element / speed);
  console.log(incrementAmounts);
  numContainers.forEach((element, index) => {
    element.innerHTML = 0;
    setInterval(() => {
      if (element.innerHTML < targetValues[index]) {
        element.innerHTML = Math.round(+element.innerHTML + incrementAmounts[index]);
      }
    }, incrementInterval);
  });
}
