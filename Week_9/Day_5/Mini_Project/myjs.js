let output = document.getElementById("output")
let output_img = document.getElementById("output_img")
let button = document.getElementById("findPokemon")
let left = document.getElementById("left")
let right = document.getElementById("right")
let number;
let audio = new Audio('Pokemon- TV Theme Song (Full) MUBlogger.mp3')

button.onclick = function(){
	if (audio.paused){
		audio.play();
	}
    number = Math.floor(Math.random() * 800);
    findPokemon(number);
}

async function getPokemon(number){
	let newDiv = document.createElement("div")
	let icon = document.createElement("i");
	icon.setAttribute("class","fas fa-spinner fa-spin");
	icon.setAttribute("style","font-size:2em;");
	let text = document.createElement("h3");
	text.innerHTML = "Loading your Pokemon...";
	newDiv.appendChild(icon);
	newDiv.appendChild(text);
	output_img.appendChild(newDiv);
	let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + `${number}`);
	let pokemon = await response.json();
	newDiv.parentNode.removeChild(newDiv);
	return pokemon;
}

function findPokemon(number){
	if (output.childElementCount != 0) {
		let children = Array.prototype.slice.call(output.children);
		do {children.forEach((child) =>{child.parentNode.removeChild(child);})
		} while (output.childElementCount != 0)
	}
	if (output_img.childElementCount != 0) {
		let children = Array.prototype.slice.call(output_img.children);
		do {children.forEach((child) =>{child.parentNode.removeChild(child);})
		} while (output_img.childElementCount != 0)
	}
	getPokemon(number)
	.then(pokemon => {
		let image = document.createElement("img");
			image.src = pokemon.sprites.front_default;
			image.style.height = '100px';
    		image.style.width = '100px';
			output_img.appendChild(image);
			let header = document.createElement("h2");
			header.innerHTML = pokemon.name;
			output.appendChild(header);
			[[pokemon.id,"Pokemon #: "], [pokemon.height, "Height: "],[pokemon.weight, "Weight: "]].forEach((val) =>{
				let newPara = document.createElement("p");
				newPara.innerHTML = val[1]+val[0];
				output.appendChild(newPara);
			})
			let newPara = document.createElement("p");
			newPara.innerHTML = "Type: ";
			pokemon.types.forEach((type) => {
				newPara.innerHTML += type.type.name + " ";
			})
			output.appendChild(newPara);
	})
	.catch(err => {
			let header = document.createElement("h2");
			header.innerHTML = "Oh no! This Pokemon is not available...";
			output.appendChild(header);
	})
}

left.onclick = function(){
    number -= 1;
    findPokemon(number);
}
right.onclick = function(){
	number += 1;
    findPokemon(number);
}
