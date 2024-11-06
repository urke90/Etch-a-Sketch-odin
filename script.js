const container = document.querySelector('#container');

function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function createLayout() {
  // will get this later from user input
  const containerWidth = container.offsetWidth;

  const squaresPerRow = 16;
  const totalSquares = squaresPerRow ** 2;

  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');

    div.setAttribute('class', 'grid-item');
    // div.style.backgroundColor = generateRandomRGBColor();
    div.style.width = `${containerWidth / squaresPerRow}px`;
    div.style.height = `${containerWidth / squaresPerRow}px`;

    div.addEventListener('mouseenter', () => {
      div.style.backgroundColor = '#000000';
    });

    container.appendChild(div);
  }
}

createLayout();
