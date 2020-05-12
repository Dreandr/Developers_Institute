function framedText(array){
	let wordLengths = [];
	for (i of array){
		wordLengths.push(i.length);
	}
	let maxLength = Math.max(...wordLengths);
	let text = "*".repeat(maxLength+4)+"\n";
	for (i of array){
		text = text + "* " + i + " ".repeat(maxLength-i.length+1) +"*\n";
	}
	text += "*".repeat(maxLength+4);
	console.log(text);
}