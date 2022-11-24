// HTML Functions
import removePlaceholder from '../UI Functions/RemovePlaceholder';
// HTML Elements
import { inputContainer, placeholders } from '../Selectors/FormElements';
import removeHTMLWarnings from '../UI Functions/RemoveWarnings';
import submitForm from '../Validation/submitForm';

// Warnings

const initApp = () => {
  removePlaceholder(inputContainer, placeholders);
  removeHTMLWarnings();
  submitForm();
};

export default initApp;
