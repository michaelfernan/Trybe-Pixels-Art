const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

const first = document.getElementById('color1');
first.style.backgroundColor = 'red';
const second = document.getElementById('color2');
second.style.backgroundColor = 'blue';
const third = document.getElementById('color3');
third.style.backgroundColor = 'green';
const fourth = document.getElementById('color4');
fourth.style.backgroundColor = 'yellow';

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', limparQuadro);

first.addEventListener('click', adicionandoColor);
second.addEventListener('click', adicionandoColor);
third.addEventListener('click', adicionandoColor);
fourth.addEventListener('click', adicionandoColor);

const randomColorButton = document.createElement('button');
randomColorButton.id = 'button-random-color';
randomColorButton.textContent = 'Cores aleatórias';
randomColorButton.addEventListener('click', gerarCoresAleatorias);
document.body.appendChild(randomColorButton);

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

function gerarCoresAleatorias() {
  const colors = document.querySelectorAll('.color');
  const randomColors = generateRandomColors(4);

  for (let i = 0; i < colors.length; i++) {
    colors[i].style.backgroundColor = randomColors[i];
  }
}

function generateRandomColors(numColors) {
  const randomColors = [];
  for (let i = 0; i < numColors; i++) {
    const color = getRandomColor();
    randomColors.push(color);
  }
  return randomColors;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function savePixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const pixelData = [];

  for (let pixel of pixels) {
    const color = pixel.style.backgroundColor;
    const position = Array.from(pixelBoard.children).indexOf(pixel);
    pixelData.push({ color, position });
  }

  localStorage.setItem('pixelBoard', JSON.stringify(pixelData));
}

function restorePixelBoard() {
  const savedPixelData = localStorage.getItem('pixelBoard');

  if (savedPixelData) {
    const pixelData = JSON.parse(savedPixelData);

    for (let data of pixelData) {
      const pixel = pixelBoard.children[data.position];
      pixel.style.backgroundColor = data.color;
    }
  }
}

pixelBoard.addEventListener('click', savePixelBoard);

document.addEventListener('DOMContentLoaded', restorePixelBoard);
