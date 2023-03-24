const sliderRef = document.querySelector('#font-size-control');
const titleRef = document.querySelector('#text');

const onSliderInput = event => {
  titleRef.style.fontSize = `${event.currentTarget.value}px`;
};

const sliderValue = sliderRef.addEventListener('input', onSliderInput);
