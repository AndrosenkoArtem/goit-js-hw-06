const fornRef = document.querySelector('.login-form');
const submitBtnRef = document.querySelector('button[type="submit"]');

const onSubmitReset = event => {
  event.preventDefault();
};

const oncheckFormValue = event => {
  const emptyStr = [];
  const formData = new FormData(event.currentTarget).forEach(el =>
    emptyStr.push(el),
  );
  if (emptyStr.includes('')) {
    // alert('Заполните все поля');
  } else {
    const formDataObject = new FormData(event.currentTarget);
    const formValuesObject = Object.fromEntries(formDataObject.entries());
    console.log(formValuesObject);
    event.currentTarget.reset();
  }
};
fornRef.addEventListener('submit', onSubmitReset);
fornRef.addEventListener('submit', oncheckFormValue);
