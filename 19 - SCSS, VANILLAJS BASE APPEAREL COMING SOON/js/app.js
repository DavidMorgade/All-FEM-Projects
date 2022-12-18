const inputField = document.querySelector('.form__input');
const form = document.querySelector('form');
const container = document.querySelector('.main__text');
const heading = document.querySelector('.main__heading');

form.addEventListener('submit', (e) => submitForm(e, inputField.value));

// Function that handles the form submission
function submitForm(e, email) {
  e.preventDefault();
  if (!validateEmail(email)) {
    createAlert();
    return;
  }
  loadSpinner();
  successMsj(email);
}
// typewriter effect

////////////////////////////// EMAIL IS NOT VALID /////////////////////////////////////////////

// Validate emails returns boolean
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// Create Alert
function createAlert() {
  if (document.querySelector('.alert')) {
    return;
  }
  // Add red border
  inputField.classList.add('invalid');
  // Creates alert msj
  const alertMsj = document.createElement('p');
  alertMsj.classList.add('alert');
  alertMsj.textContent = 'Please provide a valid email';
  // Adds alert img
  const alertIcon = document.createElement('img');
  alertIcon.src = '../images/icon-error.svg';
  alertIcon.classList.add('alert__image');
  // Appends to the form
  form.appendChild(alertIcon);
  form.appendChild(alertMsj);
  setTimeout(() => {
    alertMsj.remove();
    alertIcon.remove();
    inputField.classList.remove('invalid');
  }, 5000);
}
//////////////////////////// EMAIL IS VALID //////////////////////////////////////////////////

// Creates a loading spinner (simulates a post request)
function loadSpinner() {
  const spinner = document.createElement('div');
  spinner.classList.add('sk-folding-cube');
  spinner.innerHTML = `<div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>`;
  form.remove();
  container.appendChild(spinner);
  setTimeout(() => {
    spinner.remove();
  }, 5000);
}
// Creates a success message with the inputted email
function successMsj(email) {
  // Container
  const successContainer = document.createElement('div');
  successContainer.classList.add('success');
  // Message
  const successMsj = document.createElement('p');
  successMsj.classList.add('success__message');
  successMsj.textContent = `Thanks you ${email} we will send you details soon!`;
  // Success icon
  const successIcon = document.createElement('div');
  successIcon.classList.add('success-icon');
  successIcon.innerHTML = `<div class="success-icon__tip"></div>
  <div class="success-icon__long"></div>`;
  successContainer.appendChild(successIcon);
  successContainer.appendChild(successMsj);
  setTimeout(() => {
    container.appendChild(successContainer);
    typeWriter(successMsj);
  }, 5000);
}

// Typewriter effect
function typeWriter(el) {
  const textArray = el.textContent.split('');
  el.innerHTML = '';
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 95 * i)
  );
  setInterval(() => typeWriter(el), 8000);
}
