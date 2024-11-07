const container = document.querySelector('#container');
const optionsContainer = document.querySelector('#options-container');

const BUTTON_VALUES = {
  COLORIZE_GRID: 'colorize-grid',
  NORMAL_COLOR: 'normal-color',
  UPDATE_GRID: 'update-grid',
};

const state = {
  startingColor: '#000000',
  isRandomColor: false,
};

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
      let gridItemColor = state.startingColor;

      if (state.isRandomColor) {
        gridItemColor = generateRandomRGBColor();
      }

      div.style.backgroundColor = gridItemColor;
    });

    container.appendChild(div);
  }
}

optionsContainer.addEventListener('click', (e) => {
  const value = e.target.dataset.value;

  switch (value) {
    case BUTTON_VALUES.COLORIZE_GRID:
      {
        state.isRandomColor = true;
      }
      break;
    case BUTTON_VALUES.NORMAL_COLOR:
      {
        state.isRandomColor = false;
      }
      break;
    case BUTTON_VALUES.UPDATE_GRID:
      {
        const userInput = Number(
          prompt('Enter new number of squares in range: 10-100')
        );

        if (isNaN(userInput)) {
          alert('Please enter number in range from 10 to 100');
          return;
        }

        createLayout(userInput);
      }
      break;

    default:
      break;
  }
});

function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

createLayout();
