let selectorBox = document.getElementById("selectorBox");
let gameBoard = document.getElementById("container");
let player;
let player_spaces = [];
let ai_spaces = [];
const winCombos = [
           [0, 4, 8],
           [6, 4, 2],
           [3, 4, 5],
           [1, 4, 7],
           [0, 1, 2],
           [6, 7, 8],
           [0, 3, 6],
           [2, 5, 8]
]

function startGame(playerElement) {
	player = playerElement;
	player_spaces = [];
	ai_spaces = [];
	selectorBox.setAttribute("style", "visibility: hidden;");
	gameBoard.setAttribute("style", "visibility: visible;");
	for (i of [0,1,2,3,4,5,6,7,8]) {
		gameBoard.children[i].addEventListener("click", createElement)
	}
}

function createElement(){
	if (player != "X") { 
		this.innerHTML = `<svg class="bi bi-circle" width="3em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="circle"  onclick="startGame('circle')">
	  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
	</svg>`; 
		this.style.padding = "5% 5%";
	} else {
	 this.innerHTML = `<svg class="bi bi-x" width="4.5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="X" onclick="startGame('X')">
	  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
	  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
	</svg>`;
		this.style.padding = "7% 5%";

	}
	player_spaces.push(Array.prototype.indexOf.call(gameBoard.children, this))
	gameOn = true 
	winCombos.forEach((arr) => {
		let counter = 0;
		arr.forEach((val) => {
			player_spaces.indexOf(val) != -1 ? counter += 1 : null;
		})
		if (counter == 3){
			setTimeout(()=>{
        		gameOver("player");
   			 },10)
			gameOn = false
		}
	})
	gameOn ? makeTurn() : null
	winCombos.forEach((arr) => {
		let counter = 0;
		arr.forEach((val) => {
			ai_spaces.indexOf(val) != -1 ? counter += 1 : null;
		})
		if (counter == 3){
			setTimeout(()=>{
        		gameOver("AI");
   			 },10)
		}
	})
	let counter3 = 0;
	[0,1,2,3,4,5,6,7,8].forEach((val) =>{
		if (player_spaces.indexOf(val) == -1 && ai_spaces.indexOf(val) == -1){
				counter3 += 1;
		}
	})
	if (counter3 == 0){
		setTimeout(()=>{
        		gameOver("Draw");
   			 },10)
	}
}

function makeTurn(){
	let counters = [];
	winCombos.forEach((arr) => {
				let counter = 0;
                arr.forEach((val) => {
                	if (player_spaces.indexOf(val) != -1) {
                		counter += 1}
                	if (ai_spaces.indexOf(val) != -1) {
                		counter -= 3}
                });
                counters.push(counter)	
	})
	let max = Math.max(...counters);
	let target;
	if (target == undefined) {
		let counters2 = [];
		winCombos.forEach((arr) => {
			let counter = 0;
            arr.forEach((val) => {
            	if (ai_spaces.indexOf(val) != -1) {
            		counter += 1}
            	if (player_spaces.indexOf(val) != -1) {
            		counter -= 3}
            });
            counters2.push(counter) 
        })
        if (counters2.indexOf(2) != -1) { 
        console.log(winCombos[counters2.indexOf(Math.max(...counters2))])
		for (let i of winCombos[counters2.indexOf(2)]){
			if (ai_spaces.indexOf(i) == -1){
				target = i;
			}
		}
	}
	}
	if (player_spaces.indexOf(4) == -1 && ai_spaces.indexOf(4) == -1){
		target = 4;
	}
	if (target == undefined){
	winCombos[counters.indexOf(max)].forEach((val) =>{
		if ([0,2,6,8].indexOf(val) != -1 && player_spaces.indexOf(val) == -1 && ai_spaces.indexOf(val) == -1){
			target = val;
		}
	})
	}
	if (target === undefined) {
		winCombos[counters.indexOf(max)].forEach((val) =>{
		if (player_spaces.indexOf(val) == -1 && ai_spaces.indexOf(val) == -1){
			target = val;
		}	
		})
	}
if (target == undefined) {
	[0,1,2,3,4,5,6,7,8].forEach((val) =>{
		if (player_spaces.indexOf(val) == -1 && ai_spaces.indexOf(val) == -1){
				target = val;
		}
	})
}
if (target != undefined) {
ai_spaces.push(target)
console.log(ai_spaces)
if (player == "X") { 
	gameBoard.children[target].innerHTML = `<svg class="bi bi-circle" width="3em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="circle"  onclick="startGame('circle')">
	  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
	</svg>`;
	gameBoard.children[target].style.padding = "5% 5%"; 
	} else {
	gameBoard.children[target].innerHTML = `<svg class="bi bi-x" width="4.5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="X" onclick="startGame('X')">
	  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
	  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
	</svg>`;
	gameBoard.children[target].style.padding = "7% 5%"; 
	}
}	
}

function gameOver(winner){
	winner == "player" ? alert("Game over! You win!") : 
	winner == "AI" ? alert("Game over! AI wins!") : alert("It's a draw!")
	for (child of gameBoard.children){
		child.children.length != 0 ? child.children[0].parentNode.removeChild(child.children[0]) : null	
	}
	gameBoard.style.visibility = "hidden";
	selectorBox.style.visibility = "visible";		
}