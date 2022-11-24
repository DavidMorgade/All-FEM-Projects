const form = document.querySelector('.form') as HTMLFormElement;
const inputContainer = document.querySelectorAll(
  '.form__inputContainer'
)! as NodeListOf<HTMLDivElement>;

const placeholders = document.querySelectorAll(
  '.placeholder'
) as NodeListOf<HTMLSpanElement>;

const inputs = document.querySelectorAll(
  '.form__input'
) as NodeListOf<HTMLInputElement>;
const firstName = document.querySelector('#firstName') as HTMLInputElement;
const lastName = document.querySelector('#lastName') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const password = document.querySelector('#password') as HTMLInputElement;

export {
  inputContainer,
  placeholders,
  inputs,
  firstName,
  lastName,
  email,
  password,
  form,
};
