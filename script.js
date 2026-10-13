let count = 0;

const cheerBtn = document.getElementById('cheerBtn');
const countDisplay = document.getElementById('count');

cheerBtn.addEventListener('click', () => {
  count += 1;
  countDisplay.textContent = count;
});
