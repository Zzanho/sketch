const gridContainer = document.querySelector('#grid-container');
const newGridButton = document.querySelector('#new-grid-button');

function createGrid(numSquaresPerSide) {
  // Remove existing grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Create new grid
  for (let i = 0; i < numSquaresPerSide; i++) {
    for (let j = 0; j < numSquaresPerSide; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      gridContainer.appendChild(square);

      square.addEventListener('mouseover', () => {
        square.classList.add('hovered');
      });
    }
  }

  // Adjust square size based on new number of squares per side
  const squareSize = `calc(960px / ${numSquaresPerSide})`;
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.width = squareSize;
    square.style.height = squareSize;
  });
}

newGridButton.addEventListener('click', () => {
  let numSquaresPerSide = prompt('Enter the number of squares per side (max 100):');
  numSquaresPerSide = Math.min(numSquaresPerSide, 100); // Limit to max of 100 squares
  createGrid(numSquaresPerSide);
});

// Create initial grid
createGrid(16);
