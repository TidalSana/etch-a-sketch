const defaultSize = 16; 

let container = document.querySelector(".container"); 
let reset = document.getElementById("reset");
let slider = document.getElementById("gridSlider");
let userInput = document.getElementById("userInput");
let value = 0;

userInput.innerHTML = slider.value;
slider.onchange = function() {
    userInput.innerHTML = this.value;
    value = this.value;
    value = parseInt(value);
    container.innerHTML = '';
    makeGrid(value, value);
}

reset.addEventListener("click", function () {
    clearGrid();
    userInput.innerText = 16;
    slider.value = 16;
});

container.addEventListener("mouseover", function() {
    container.style.container = "pointer";
});

let makeGrid = function(rows, columns) {
    for (i = 0; i < (rows * columns); i++) {
        let grid = document.createElement("div");
        grid.classList.add('pixel');
        container.appendChild(grid); 
        grid.addEventListener("mouseenter", function() {
            grid.style.backgroundColor = "#D2CCE3";
        });
    }
    gridSize(rows, columns);
};

let gridSize = function(rows, columns) {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
};

let clearGrid = function () {
    container.innerHTML = '';
    makeGrid(defaultSize, defaultSize);
};

makeGrid(defaultSize, defaultSize);
