let cells = [];
let lines = [];
let hand = document.getElementById('hand');
const CELLS_SIZE = 100;
const RANDOM_MAX_RANGE = 100;
const LINES_SIZE = 5;
const NRS_PER_LINES = 20;
const HAND_CENTER = {x: hand.offsetWidth * 0.45, y: hand.offsetHeight * 0.85 };
const FINGERS = [
	{x: hand.offsetWidth * 0.235, y: hand.offsetHeight * 0.3},
	{x: hand.offsetWidth * 0.37, y: hand.offsetHeight * 0.15},
	{x: hand.offsetWidth * 0.515, y: hand.offsetHeight * 0.08},
	{x: hand.offsetWidth * 0.655, y: hand.offsetHeight * 0.15},
	{x: hand.offsetWidth * 0.82, y: hand.offsetHeight * 0.6}
	];

function initCells() {
	
    for (let i = 0; i < LINES_SIZE; i++) {
        for(let j = 0; j < NRS_PER_LINES; j++){
			
			let cell = document.createElement('div');
        	cell.classList.add('cell');
        	let randomNr = getRandomNumber();
        	cell.innerHTML = randomNr;
			document.getElementsByTagName('body')[0].insertAdjacentElement('afterbegin', cell);
		
			cells.push(cell);
			
			let cellTop = (( (NRS_PER_LINES - j) * FINGERS[i].y) + (j*HAND_CENTER.y)) / (NRS_PER_LINES);
			let cellLeft = (( (NRS_PER_LINES - j) * FINGERS[i].x) + (j*HAND_CENTER.x)) / (NRS_PER_LINES);
			if(j % 2 == 0){
				cellLeft += (25 + (j * i));
				cellTop -= (10 + (j*i));
			}else{
				cellLeft -= (25 + (j * i ));
				cellTop += (10 +(j*i));
			}
			
			cell.style.top = `${cellTop}px`;
		    cell.style.left = `${cellLeft}px`;
		}
		//Fingers top cells
//		cells[i].style.top = `${FINGERS[i].y}px`;
//		cells[i].style.left = `${FINGERS[i].x}px`;
    }
}

function showHandSize(){
	alert(hand.offsetWidth+" "+hand.offsetHeight);
}

function getRandomNumber() {
    return Math.floor(Math.random() * RANDOM_MAX_RANGE);
}

function getLength(x, y){
	return Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2));
}
