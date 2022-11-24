const removePlaceholder = (
  container: NodeListOf<HTMLDivElement>,
  placeholders: NodeListOf<HTMLSpanElement>
): void => {
  container.forEach((div) => {
    const input2 = div.querySelector('input') as HTMLInputElement;
    const placeholder = div.querySelector('.placeholder') as HTMLSpanElement;
    if (input2.value !== '') placeholder.classList.add('hidden');
    div.addEventListener('focusin', () => {
      placeholders.forEach((span) => {
        const input = span.previousElementSibling as HTMLInputElement;
        if (input.value !== '') return;
        span.classList.remove('hidden');
      });
      placeholder.classList.add('hidden');
    });
    div.addEventListener('focusout', () => {
      placeholders.forEach((span) => {
        const input = span.previousElementSibling as HTMLInputElement;
        if (input.value === '') span.classList.remove('hidden');
      });
    });
  });
};

export default removePlaceholder;
