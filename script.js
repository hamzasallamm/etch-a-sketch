const grid = document.querySelector('#grid');
const gridButton = document.querySelector('#gridButton');
const drawStatus = document.querySelector('#drawStatus');
const eraserButton = document.querySelector('#eraserButton');
const clearButton = document.querySelector('#clearButton');
const colorPicker = document.querySelector('#colorPicker');

const originalSquareColor = 'white';

let drawingEnabled = true;
let eraserEnabled = false;
let currentColor = colorPicker.value;

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

eraserButton.addEventListener('click', function() {
    eraserEnabled = !eraserEnabled;
    eraserButton.textContent = eraserEnabled ? 'Eraser: ON' : 'Eraser: OFF';
    eraserButton.classList.toggle('active', eraserEnabled);
})

clearButton.addEventListener('click', function() {
    const squares = grid.querySelectorAll('div');
    squares.forEach(function(square) {
        square.style.backgroundColor = originalSquareColor;
    });
})

colorPicker.addEventListener('input', function() {
    currentColor = colorPicker.value;
})

function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.style.width = `${500 / gridSize}px`;
        square.style.height = `${500 / gridSize}px`;

        square.addEventListener('mouseover', function() {
            if (!drawingEnabled) return;

            if (eraserEnabled) {
                square.style.backgroundColor = originalSquareColor;
            } else {
                square.style.backgroundColor = currentColor;
            }
        });

        grid.appendChild(square);
    }
}