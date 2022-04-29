let cells; 
let state = blackHover;
const controlButtons = document.querySelectorAll('.control');
controlButtons.forEach(control => control.addEventListener('click', changeState));
function createGrid() {
    let area = prompt("Provide a grid size", 16);
    checkInput(area);
    const gridContainer = document.querySelector('.grid-container');
    for(let i = 0; i < area**2; i++) {
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.style.height = `${gridContainer.clientHeight / area}px`;
        cell.style.width = `${gridContainer.clientWidth / area}px`;
        gridContainer.appendChild(cell); 
    }
    cells = document.querySelectorAll('.cell');
    hover(blackHover);
}



function hover(colorFunction) {
        cells.forEach(cell => cell.addEventListener('mouseover', colorFunction));
    }


function changeState(event) {
    cells.forEach(cell => cell.removeEventListener('mouseover', state))
    switch(event.target.textContent) {
        case "Black" :
            state = blackHover;
            hover(blackHover);
            break;
        case "RGB" :
            state = rgbHover;
            hover(rgbHover);
            break;
        case "Blackness" :
            cells.forEach(cell => cell.setAttribute("data-lightness", "100"));
            state = blacknessHover;
            hover(blacknessHover);
            break;
        case "Reset" :
            removeCells();
    }
}

function blackHover(event) {
    event.target.style.backgroundColor = 'black';
}

function rgbHover(event) {
    event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function blacknessHover(event) {
    event.target.style.backgroundColor = `hsl(0, 0%, ${event.target.dataset.lightness -= 10}%)`;
}

function removeCells() {
    cells.forEach(cell => cell.remove());
    createGrid();
}

function checkInput(area) {
    while(true){
        if(area > 100 || area < 2 || area != +area) {
            area = prompt("Try again", 16);
        } else {
            break;
        }
    }
}

createGrid();