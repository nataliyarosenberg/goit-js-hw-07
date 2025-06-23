const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const formInput = form.querySelectorAll(
    `input[type="email"], input[type="password"]`
  );
  let filled = true;

  formInput.forEach(input => {
    const value = input.value.trim();

    if (value === '') {
      filled = false;
    }
  });
  if (!filled) {
    alert('All form fields must be filled in');
  } else {
    const filledInfo = {
      emal: form.elements.email.value.trim(),
      password: form.elements.password.value.trim(),
    };
    console.log('Your filled info:', filledInfo);
    form.reset();
  }
});
