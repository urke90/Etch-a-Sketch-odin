const container = document.querySelector('#container');
const optionsContainer = document.querySelector('#options-container');

const BUTTON_VALUES = {
  COLORIZE_GRID: 'colorize-grid',
  NORMAL_COLOR: 'normal-color',
  UPDATE_GRID: 'update-grid',
  RESET_GRID: 'reset-grid',
};

const state = {
  numOfSquares: 16,
  startingColor: 'rgba(1, 1, 1, 0.1)',
  isRandomColor: false,
};

function createLayout(userInput) {
  const containerWidth = container.offsetWidth;

  const squaresPerRow = userInput || 16;
  const totalSquares = squaresPerRow ** 2;

  container.innerHTML = '';

  for (let i = 0; i < totalSquares; i++) {
    let enterEventCount = 0;
    const div = document.createElement('div');

    div.style.width = `${containerWidth / squaresPerRow}px`;
    div.style.height = `${containerWidth / squaresPerRow}px`;
    div.classList.add('grid-item');

    div.addEventListener('mouseenter', () => {
      enterEventCount++;
      let gridItemColor = state.startingColor;
      gridItemColor = setHoverColor(enterEventCount);

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

        state.numOfSquares = userInput;

        createLayout(state.numOfSquares);
      }
      break;
    case BUTTON_VALUES.RESET_GRID:
      {
        createLayout(state.numOfSquares);
      }
      break;
    default: {
      throw new Error('Invalid button value');
    }
  }
});
function generateRGBSingleColor() {
  return Math.floor(Math.random() * 255);
}

function generateRandomRGBColor() {
  const red = generateRGBSingleColor();
  const green = generateRGBSingleColor();
  const blue = generateRGBSingleColor();

  return `rgb(${red}, ${green}, ${blue})`;
}

function setHoverColor(count) {
  return count >= 10 ? `rgba(1, 1, 1, 1)` : `rgba(1, 1, 1, 0.${count})`;
}

createLayout();
