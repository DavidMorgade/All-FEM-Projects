import errorImg from '../images/icon-error.svg';

const createWarning = (input: HTMLInputElement, warning: string): void => {
  removeWarning(input);
  const warningImg = document.createElement('img');
  const warningMsg = document.createElement('p');
  warningMsg.textContent = warning;
  warningMsg.classList.add('warningMsg');
  warningImg.src = errorImg;
  warningImg.classList.add('warningImg');
  input.classList.add('error');
  input.insertAdjacentElement('afterend', warningImg);
  input.parentElement?.insertAdjacentElement('afterend', warningMsg);
};

const removeWarning = (input: HTMLInputElement): void => {
  const alertParagrah = input.parentElement?.nextElementSibling;
  const alertImg = input.nextElementSibling;
  if (alertParagrah?.classList.contains('warningMsg')) {
    alertParagrah.remove();
    input.classList.remove('error');
    alertImg?.remove();
  }
};

export { createWarning, removeWarning };
