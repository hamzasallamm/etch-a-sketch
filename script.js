const grid = document.querySelector('#grid');
const gridButton = document.querySelector('#gridButton');

createGrid(16);

gridButton.addEventListener('click', function(){
    let gridSize = parseInt(prompt("Enter the grid size (1-100):"));
    while (gridSize < 1 || gridSize > 100) {
        gridSize = parseInt(prompt("Please enter a number between 1 and 100:"));
    }

    grid.innerHTML = "";
    createGrid(gridSize);
})

function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.style.width = `${500 / gridSize}px`;
        square.style.height = `${500 / gridSize}px`;
        grid.appendChild(square);
    }
}