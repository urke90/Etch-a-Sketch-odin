const container = document.querySelector('#container');
const updateGridBtn = document.querySelector('#update-grid-btn');

function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function createLayout(userInput) {
  const containerWidth = container.offsetWidth;

  const squaresPerRow = userInput || 16;
  const totalSquares = squaresPerRow ** 2;

  container.innerHTML = '';

  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');

    div.classList.add('grid-item');
    // div.style.backgroundColor = generateRandomRGBColor();
    div.style.width = `${containerWidth / squaresPerRow}px`;
    div.style.height = `${containerWidth / squaresPerRow}px`;

    div.addEventListener('mouseenter', () => {
      div.style.backgroundColor = '#000000';
    });

    container.appendChild(div);
  }
}

updateGridBtn.addEventListener('click', () => {
  const userInput = Number(
    prompt('Enter new number of squares in range: 10-100')
  );

  if (isNaN(userInput)) {
    alert('Please enter number in range from 10 to 100');
    return;
  }
  createLayout(userInput);
});

createLayout();
