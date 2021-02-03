let cells = [];
let lines = [];
const CELLS_SIZE = 100;
const RANDOM_MAX_RANGE = 100;
const LINES_SIZE = 5;

function initCells() {
    for (let i = 0; i < CELLS_SIZE; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        let randomNr = getRandomNumber();
        cell.innerHTML = randomNr;

        for(let j = 0; j < LINES_SIZE; j++){
            
        }
        //TODO Set top left pos
        cell.style.top = setTop();
        cell.style.left = setLeft();

        cells.push(cell);
        document.getElementsByTagName('body')[0].insertAdjacentElement('afterbegin', cell);
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * RANDOM_MAX_RANGE);
}