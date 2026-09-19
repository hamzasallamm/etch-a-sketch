const grid = document.querySelector('#grid');
const gridButton = document.querySelector('#gridButton');
const drawStatus = document.querySelector('#drawStatus');

let drawingEnabled = true;

createGrid(16);

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        drawingEnabled = !drawingEnabled;
        drawStatus.textContent = drawingEnabled
            ? 'Drawing: ON (press Space to toggle)'
            : 'Drawing: OFF (press Space to toggle)';
    }
})

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

        square.addEventListener('mouseover', function() {
            if (drawingEnabled) {
                square.style.backgroundColor = 'black';
            }
        });

        grid.appendChild(square);
    }
}