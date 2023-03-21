const inpetRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const titleTextContent = outputRef.textContent;
const onInputValue = event => {
  if (event.currentTarget.value.length > 16) {
    event.currentTarget.value =
      event.currentTarget.value.substring(0, 16) + '...';
  }
  outputRef.textContent = event.currentTarget.value;

  if (outputRef.textContent === '') {
    outputRef.textContent = titleTextContent;
  }
};

const outputValue = inpetRef.addEventListener('input', onInputValue);
