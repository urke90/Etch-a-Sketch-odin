const container = document.querySelector('#container');

const updateGridBtn = document.querySelector('#update-grid-btn');
const colorizeGridBtn = document.querySelector('#colorize-grid-btn');

const state = {
  currentColor: '#000000',
  isRandomColor: false,
};

function createLayout(userInput) {
  console.log('createLayout');
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
      let gridItemColor = state.currentColor;

      if (state.isRandomColor) {
        gridItemColor = generateRandomRGBColor();
      }

      div.style.backgroundColor = gridItemColor;
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

colorizeGridBtn.addEventListener('click', () => {
  state.isRandomColor = true;
});

function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

createLayout();
