// Selectors
// Inputs
const allInputs = document.querySelectorAll('input[type=text]');
const form = document.querySelector('form');
const holderInput = document.querySelector('#cardholder');
const numberInput = document.querySelector('#cardnumber');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const cvcInput = document.querySelector('#cvc');
//Submit Input
const submitBtn = document.querySelector('#confirm');
// CardText
const cardNumber = document.querySelector('.card__number');
const cardHolder = document.querySelector('.card__name');
const cardExpireMonth = document.querySelector('.card__expire--month');
const cardExpireYear = document.querySelector('.card__expire--year');
// Placeholder - span
const placeholder = document.querySelector('.placeholder');
// CVC
const cardCVC = document.querySelector('.card__text');
// State of the form
let formIsValid = false;

// Waits for document to get loaded
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
// Inits the app
const initApp = () => {
  eventListeners();
  removePlaceHolder();
  cardTextChange();
};

// Event Listeners
const eventListeners = () => {
  numberInput.addEventListener('input', (e) => {
    // Formats value into credit card
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    validateForm(e.target);
  });
  holderInput.addEventListener('input', (e) => {
    validateForm(e.target);
  });
  numberInput.addEventListener('input', (e) => {});
  monthInput.addEventListener('input', (e) => {
    validateForm(e.target);
  });
  yearInput.addEventListener('input', (e) => {
    validateForm(e.target);
  });
  cvcInput.addEventListener('input', (e) => {
    validateForm(e.target);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formContainers = form.querySelectorAll('.form__container');
    addLoadingSpinner(form, formContainers);
    displayThanks(form, submitBtn);
    // Changes behaviour of the button to reload the page if continue is pressed
    let formCompleted = true;
    if (formCompleted) {
      submitBtn.value = 'Continue';
      form.addEventListener('click', (e) => {
        formCompleted = false;
        location.reload();
      });
    }
  });
};

// Functions
// Group all card text change functions
const cardTextChange = () => {
  setCardData(holderInput, cardHolder, 'Jane Applessed');
  setCardData(numberInput, cardNumber, '0000 0000 0000 0000');
  setCardData(monthInput, cardExpireMonth, '00');
  setCardData(yearInput, cardExpireYear, '00');
  setCardData(cvcInput, cardCVC, '000');
};

// Sets the card text to the input text - Reusable function.
const setCardData = (input, cardContainer, defaultValue) => {
  input.addEventListener('input', (e) => {
    const { value } = e.target;
    cardContainer.textContent = value || defaultValue;
  });
};
// Removes / Restores placeholder Span from the input that is clicked
const removePlaceHolder = () => {
  const inputs = [...allInputs];
  inputs.forEach((input) => {
    input.addEventListener('focusin', (e) => {
      e.target.nextElementSibling.classList.add('hidden');
    });
    input.addEventListener('focusout', (e) => {
      if (input.value !== '') return;
      e.target.nextElementSibling.classList.remove('hidden');
    });
  });
};
// Create HTML Warning
const createWarning = (input, message) => {
  const warning = document.createElement('p');
  warning.classList.add('warning');
  warning.textContent = message;
  input.parentElement.appendChild(warning);
  input.style.borderColor = 'red';
};
// Check number helper
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// Check if has a number
function hasNumber(myString) {
  return /\d/.test(myString);
}
// Form Validation
const validateForm = (input) => {
  // Reset the inputs style
  const { value, id } = input;
  input.parentElement.querySelector('.warning')?.remove();
  input.style.borderColor = '';
  submitBtn.classList.add('disabled');
  submitBtn.disabled = true;
  if (value === '') return createWarning(input, 'Empty value not valid');
  if (id === 'cardholder' && hasNumber(value))
    return createWarning(input, 'Not a valid name, only letters are allowed');
  if (id !== 'cardholder' && !isNumeric(value.split(' ').join('')))
    return createWarning(input, 'Invalid, numbers only');
  if (id === 'cardnumber' && value.split(' ').join('').length < 16)
    return createWarning(input, 'Credit Card needs 12 digits');
  if (id === 'cvc' && value.length < 3) {
    return createWarning(input, 'CVC needs 3-digit');
  }
  if (id === 'year' && value.length < 2)
    return createWarning(input, '2 - Digit needed');
  const inputs = [...allInputs];
  const hasEmptyString = inputs.map((inp) => inp.value).includes('');
  // Check if there are any empty string or if the warning class exits
  if (!hasEmptyString && !document.querySelector('.warning')) {
    submitBtn.classList.remove('disabled');
    submitBtn.disabled = false;
  }
};
// Add loading spinner
const addLoadingSpinner = (location, inputs) => {
  const spinner = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
  inputs.forEach((input) => input.remove());
  location.insertAdjacentHTML('afterbegin', spinner);
  submitBtn.classList.add('disabled');
  submitBtn.disabled = true;
  setTimeout(() => {
    location.removeChild(document.querySelector('.lds-ring'));
    submitBtn.classList.remove('disabled');
    submitBtn.disabled = false;
  }, 3000);
};
// Finish app and display Thanks
const displayThanks = (location, submit) => {
  const html = `<img src="./images/icon-complete.svg" alt="icon thanks" /><h2 class="thank__text">Thank you!</h2><p class="thank__details">We've added your card details</p>`;
  const div = document.createElement('div');
  div.classList.add('thank');
  div.innerHTML = html;
  setTimeout(() => {
    location.insertBefore(div, submit);
  }, 3000);
};
