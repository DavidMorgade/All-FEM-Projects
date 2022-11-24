const successMessage = (
  section: HTMLElement,
  name: string,
  lastName: string
) => {
  const message = document.createElement('p');
  message.textContent = `Thanks ${name.trim()} ${lastName.trim()} for submitting to this dummy trial and trying out this form!`;
  message.classList.add('success');
  section.insertAdjacentElement('afterend', message);
};

export default successMessage;
