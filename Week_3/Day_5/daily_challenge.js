let words = [];
addingWords = true;
while (addingWords == true){ 
	let word = 1;
	do {
		let word = prompt("Give me a word!");
		if (isNaN(word) == true){
			words.push(word);
			break;
		}
	} while (isNaN(word) == false);
	let answer = prompt("Add another word? Y/N")
	if (answer == "N"){
		addingWords = false;
		break;
	}
}
let lengths = [];
for (i of words){
	lengths.push(i.length);
}
max = Math.max(...lengths);
console.log(words[lengths.indexOf(max)]);
