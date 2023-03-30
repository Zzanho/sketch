const gridContainer = document.querySelector("#grid-container");
const newGridButton = document.querySelector("#new-grid-button");

function createGrid(numSquaresPerSide) {
  // Remove existing grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Create new grid
  for (let i = 0; i < numSquaresPerSide; i++) {
    for (let j = 0; j < numSquaresPerSide; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      gridContainer.appendChild(square);

      square.addEventListener("mouseover", () => {
        if (!square.style.backgroundColor) {
          // Assign random RGB value on first hover
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else {
          // Darken color on subsequent hovers
          const currentColor = square.style.backgroundColor;
          const currentRGB = currentColor
            .substring(4, currentColor.length - 1)
            .replace(/ /g, "")
            .split(",");
          const newRGB = currentRGB.map((color) => {
            const newColor = parseInt(color) - 25.5;
            return newColor < 0 ? 0 : newColor;
          });
          const newColor = `rgb(${newRGB[0]}, ${newRGB[1]}, ${newRGB[2]})`;
          square.style.backgroundColor = newColor;
        }

        // Check if square has been hovered 10 times
        const numHovers = parseInt(square.getAttribute("data-hovers")) || 0;
        if (numHovers >= 9) {
          square.style.backgroundColor = "black";
        } else {
          square.setAttribute("data-hovers", numHovers + 1);
        }
      });
    }
  }

  // Adjust square size based on new number of squares per side
  const squareSize = `calc(960px / ${numSquaresPerSide})`;
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.width = squareSize;
    square.style.height = squareSize;
  });
}

newGridButton.addEventListener("click", () => {
  let numSquaresPerSide = prompt(
    "Enter the number of squares per side (max: 100):"
  );
  numSquaresPerSide = Math.min(numSquaresPerSide, 100); // Limit to max of 100 squares
  createGrid(numSquaresPerSide);
});

// Create initial grid
createGrid(16);
