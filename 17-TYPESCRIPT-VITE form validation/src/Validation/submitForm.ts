import {
  checkValidationEmail,
  checkValidationEmpty,
} from '../Validation/validation';

import {
  email,
  firstName,
  form,
  lastName,
  password,
} from '../Selectors/FormElements';
import addSpinner from '../UI Functions/AddSpinner';

const submitForm = () => {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    checkValidationEmpty(firstName);
    checkValidationEmpty(lastName);
    checkValidationEmail(email);
    checkValidationEmpty(password);
    if (
      checkValidationEmpty(firstName) &&
      checkValidationEmpty(lastName) &&
      checkValidationEmail(email) &&
      checkValidationEmpty(password)
    ) {
      addSpinner(firstName.value, lastName.value);
      form.reset();
    }
  });
};

export default submitForm;
