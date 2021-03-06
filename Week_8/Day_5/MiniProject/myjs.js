let output = document.getElementById("output")
let button = document.getElementById("findPerson")
button.addEventListener("click", findSomeone)
function findSomeone(){
	if (output.childElementCount != 0) {
		let children = Array.prototype.slice.call(output.children);
		do {children.forEach((child) =>{child.parentNode.removeChild(child);})
		} while (output.childElementCount != 0)
	}
	let link = "https://swapi.dev/api/people/" + `${Math.floor(Math.random() * 100)}/`;
	let request = new XMLHttpRequest();
	request.open('GET', link, true);
	request.send()
	let icon = document.createElement("i");
	icon.setAttribute("class","fas fa-spinner fa-spin");
	icon.setAttribute("style","font-size:3em;");
	let text = document.createElement("h3");
	text.innerHTML = "Loading, please wait...";
	output.appendChild(icon);
	output.appendChild(text);
	request.onload = function (){
		icon.parentNode.removeChild(icon);
		text.parentNode.removeChild(text);
		if (request.status != 404){
			let p = request.response;
			let person = JSON.parse(p);
			let header = document.createElement("h2");
			header.innerHTML = person.name;
			output.appendChild(header);
			[[person.height,"Height: "], [person.gender, "Gender: "],[person.birth_year, "Birth Year: "]].forEach((val) =>{
				let newPara = document.createElement("p");
				newPara.innerHTML = val[1]+val[0];
				output.appendChild(newPara);
			})
			let request2 = new XMLHttpRequest();
			request2.open('GET', person.homeworld, true);
			request2.send();
			request2.onload = function (){
				let h = request2.response;
				let homeWorld_parsed = JSON.parse(request2.response);
				let newPara = document.createElement("p");
				newPara.innerHTML = "Homeworld: " + homeWorld_parsed.name;
				output.appendChild(newPara);
			}
		} else {
	let header = document.createElement("h2");
			header.innerHTML = "Oh no! It looks like this person is not here.";
			output.appendChild(header);
		}
	}
}