function createGrid(area = 16) {
    if(area > 100) {
        alert("Error!");
        return;
    }
    const gridContainer = document.querySelector('.grid-container');
    for(let i = 0; i < area**2; i++) {
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.style.height = `${gridContainer.clientHeight / area}px`;
        cell.style.width = `${gridContainer.clientWidth / area}px`;
        gridContainer.appendChild(cell); 
        console.log(cell.style.width);
    }
}
createGrid();