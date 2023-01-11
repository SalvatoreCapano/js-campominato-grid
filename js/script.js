const playBtn = document.querySelector("#playBtn");
const grid = document.querySelector(".grid");

// Numero di celle
const cellsNumber = 100;

playBtn.addEventListener("click", function(){

    // Svuota la griglia
    grid.innerHTML = "";
    // Svuota la console
    console.clear();

    // Se non presente, mostra la griglia
    if (!grid.classList.contains("show")) {
        grid.classList.add("show");
    }

    // Riempie la griglia
    for (let i = 0; i < cellsNumber; i++) {

        // Creazione e aggiunta nuovo elemento cell
        const newCell = document.createElement("div");
        newCell.classList.add("cell");

        newCell.innerHTML = i + 1;

        grid.append(newCell);

        newCell.addEventListener("click", function(){
            console.log("Hai cliccato la cella", this.innerHTML);
            this.classList.add("active");
            
        });
    }

});