const gridContainer = document.querySelector('#grid-container');
const squares = document.querySelectorAll(".square");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        const square = document.createElement('div');
     square.classList.add('square');
     gridContainer.appendChild(square);
    }
}

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("hovered");
    });
    square.addEventListener("mouseout", () => {
      square.classList.remove("hovered");
    });
  });
