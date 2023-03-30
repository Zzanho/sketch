const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);

    square.addEventListener('mouseover', () => {
      square.classList.add('hovered');
    });

    square.addEventListener('mouseout', () => {
      square.classList.remove('hovered');
    });
  }
}
