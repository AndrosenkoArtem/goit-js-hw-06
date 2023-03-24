const inputRef = document.querySelector('#validation-input');

const onInputBlur = event => {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  }
  inputRef.classList.remove('valid');
  return inputRef.classList.add('invalid');
};

const inputValid = inputRef.addEventListener('blur', onInputBlur);
