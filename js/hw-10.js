function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputCreateValueRef = document.querySelector(['input[type="number"]']);
const createBtnRef = document.querySelector('[data-create');
const destroyBtnRef = document.querySelector('[data-destroy');
const contsinerElRef = document.querySelector('#boxes');

const colectionChild = contsinerElRef.children;

const createBoxes = amount => {
  const massiveEl = [];
  let sizeEl = 20;
  for (let i = 0; i < amount; i += 1) {
    sizeEl += 10;
    const newDiv = document.createElement('div');
    newDiv.style.width = `${sizeEl}px`;
    newDiv.style.height = `${sizeEl}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    massiveEl.push(newDiv);
  }
  contsinerElRef.append(...massiveEl);
};
const onChangeColor = () => {
  [...colectionChild].forEach(el => el.remove());
  createBoxes(inputCreateValueRef.value);
};
createBtnRef.addEventListener('click', onChangeColor);

const destroyBoxes = () => {
  [...colectionChild].forEach(el => el.remove());
};

destroyBtnRef.addEventListener('click', destroyBoxes);
