function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const magicButtonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const titleColorRef = document.querySelector('.color');

const onButtonClick = () => {
  titleColorRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = titleColorRef.textContent;
};

magicButtonRef.addEventListener('click', onButtonClick);
