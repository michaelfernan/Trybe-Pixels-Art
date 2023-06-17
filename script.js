const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

function adicionandoColor() {
  const colors = document.querySelectorAll('.color');
  for (let color of colors) {
    color.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.classList.remove('selected');
      }

      event.target.classList.add('selected');
    });
  }
}

const first = document.getElementById('color1');
first.style.backgroundColor = 'red';
const firstLi = document.getElementById('color2');
firstLi.style.backgroundColor = 'blue';
const secondLi = document.getElementById('color3');
secondLi.style.backgroundColor = 'green';
const thirdLi = document.getElementById('color4');
thirdLi.style.backgroundColor = 'yellow';

first.addEventListener('click', adicionandoColor);
firstLi.addEventListener('click', adicionandoColor);
secondLi.addEventListener('click', adicionandoColor);
thirdLi.addEventListener('click', adicionandoColor);
