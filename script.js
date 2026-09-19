const grid = document.querySelector('#grid');
const gridSize = 16;


for (let i = 0; i < gridSize*gridSize; i++) {
    const square = document.createElement('div');
    square.style.width = `${500 / gridSize}px`;
    square.style.height = `${500 / gridSize}px`;
    grid.appendChild(square);
}