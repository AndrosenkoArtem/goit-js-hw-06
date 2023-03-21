const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueCounterRef = document.querySelector('#value');
let counterValue = 0;
const onDecrementClick = () => {
  if (valueCounterRef.textContent > 0) {
    counterValue -= 1;
    valueCounterRef.textContent = counterValue;
  }
};
const onIncrementClick = () => {
  counterValue += 1;
  valueCounterRef.textContent = counterValue;
};
const decrementtValue = decrementRef.addEventListener(
  'click',
  onDecrementClick,
);
const incrementValue = incrementRef.addEventListener('click', onIncrementClick);
