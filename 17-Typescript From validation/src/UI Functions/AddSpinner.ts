import successMessage from './SuccessMessage';

const addSpinner = (firstName: string, lastName: string) => {
  const topSection = document.querySelector('.top') as HTMLElement;
  const bottomSection = document.querySelector('.bottom') as HTMLElement;
  const spinner = document.createElement('div');
  spinner.innerHTML = `<div></div><div></div><div></div><div></div>`;
  spinner.classList.add('lds-ring');
  bottomSection.remove();
  topSection.insertAdjacentElement('afterend', spinner);
  setTimeout(() => {
    spinner.remove();
  }, 3000);
  setTimeout(() => {
    successMessage(topSection, firstName, lastName);
  }, 3000);
};

export default addSpinner;
