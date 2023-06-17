const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

const first = document.getElementById('color1');
first.style.backgroundColor = 'red';
const firstLi = document.getElementById('color2');
firstLi.style.backgroundColor = 'blue';
const secondLi = document.getElementById('color3');
secondLi.style.backgroundColor = 'green';
const thirdLi = document.getElementById('color4');
thirdLi.style.backgroundColor = 'yellow';

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', limparQuadro);

first.addEventListener('click', adicionandoColor);
firstLi.addEventListener('click', adicionandoColor);
secondLi.addEventListener('click', adicionandoColor);
thirdLi.addEventListener('click', adicionandoColor);

adicionandoColor();
preencherPixel();

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

function preencherPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.addEventListener('click', (event) => {
      const corSelecionada = document.querySelector('.color.selected');
      if (corSelecionada) {
        const cor = corSelecionada.style.backgroundColor;
        event.target.style.backgroundColor = cor;
      }
    });
  }
}

function limparQuadro() {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}
