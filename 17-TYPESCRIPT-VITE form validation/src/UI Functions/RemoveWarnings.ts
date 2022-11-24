import { inputs } from '../Selectors/FormElements';
import { removeWarning } from './CreateWarning';

const removeHTMLWarnings = () => {
  inputs.forEach((input) =>
    input.addEventListener('input', () => {
      removeWarning(input);
    })
  );
};

export default removeHTMLWarnings;
