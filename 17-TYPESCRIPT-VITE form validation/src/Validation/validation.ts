import { createWarning } from '../UI Functions/CreateWarning';

const checkValidationEmpty = (input: HTMLInputElement) => {
  if (input.value.trim() === '') {
    createWarning(input, `${input.getAttribute('data-name')} cannot be empty`);
    return false;
  }
  return true;
};
const checkValidationEmail = (input: HTMLInputElement) => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (input.value.trim() === '') {
    createWarning(input, `${input.getAttribute('data-name')} cannot be empty`);
    return false;
  }
  if (!emailRegex.test(input.value)) {
    createWarning(input, `${input.value} is not a valid email`);
    return false;
  }
  return true;
};

export { checkValidationEmpty, checkValidationEmail };
