//Excercises XP Gold
//Excercise 1

function sortNumbers(array){
	let sorted = false;
	while (sorted == false){
	for (let i = 0; i < array.length-1; i++){
		if (array[i] < array[i+1]){
			let x = array[i];
			array[i] = array[i+1];
			array[i+1] = x;
		}
	}
	let counter = array.length;
	for (let i = 0; i < array.length-1; i++){
		if (array[i] > array[i+1]){
			counter -= 1;
		}
	}
	if (counter == 1){
		sorted = true;
		break;
	}
	}
	alert(array);
}

//Excercise 2
function findTheSign(array){
	let mark;
	let product = array[0]*array[1];
	for (let i = 2; i < array.length; i++){
		product = product * array[i]; 
	}
	if (product < 0){
		mark = "The sign is -";
	} else {
		mark = "The sign is +"
	}
	alert(mark);
}

// Excercise 3
let grades = {
    david:  80,
    vinoth: 77,
    divya: 88,
    ishitha: 95,
    thomas: 68,
    lea: 77
}

function bestGrade(grades){
	let marks_array = [];
	let names_array = [];
	for (let [key, value] of Object.entries(grades)){
		marks_array.push(value);
		names_array.push(key);
	}
	return names_array[marks_array.indexOf(Math.max(...marks_array))];
}

function worstGrade(grades){
	let marks_array = [];
	let names_array = [];
	for (let [key, value] of Object.entries(grades)){
		marks_array.push(value);
		names_array.push(key);
	}
	return names_array[marks_array.indexOf(Math.min(...marks_array))];
}

function sameGrades(grades){
	let marks_array = [];
	let names_array = [];
	for (let [key, value] of Object.entries(grades)){
		marks_array.push(value);
		names_array.push(key);
	}
	let doubles = [];
	let names = [];
	for (i of marks_array){
		let temp = i;
		let counter = 0;
		for (a of marks_array){
			if (a == temp){
				counter += 1;
			} 
		}
		if (counter > 1){
			if (doubles.includes(i) == false){
				doubles.push(i);
			}
		}
	}
	for (x of doubles){
		for (let [key, value] of Object.entries(grades)){
			if (value == x){
				names.push(key)
			}
		}
	}
	return names;
	}

