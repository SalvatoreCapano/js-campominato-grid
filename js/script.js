const playBtn = document.querySelector("#playBtn");
const grid = document.querySelector(".grid");

// Numero di celle
const cellsNumber = 100;

playBtn.addEventListener("click", function(){

    // Svuota la griglia
    grid.innerHTML = "";

    // Riempie la griglia
    for (let i = 0; i < cellsNumber; i++) {

        // Creazione e aggiunta nuovo elemento cell
        const newCell = document.createElement("div");
        newCell.classList.add("cell");

        newCell.innerHTML = i + 1;
        
        grid.append(newCell);
    }

});