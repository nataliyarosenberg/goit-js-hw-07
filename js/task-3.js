const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', updateGreeting);
function updateGreeting() {
  const inputValue = input.value.trim();
  if (inputValue === '' || inputValue === ' ') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputValue;
  }
}
updateGreeting();
