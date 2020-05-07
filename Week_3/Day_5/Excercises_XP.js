// Excercises XP
// Excercise 1
//As a function
function isSumLessThan100(num1,num2){
	if (num1 + num2 < 100){
		return true;
	} else {
		return false;
	}
}

// Excercise 2
let num1 = prompt("Put in the first number!");
let num2 = prompt("Put in the second number!");
console.log(num1%num2);

// Excercise 3
function dividesEvenly(num1, num2){
	if (num1%num2 == 0){
		return true;
	} else {
		return false;
	}
}

//Excercise 4
function isNumberThere(array){
	let number = prompt("Give me a number!");
	number = parseInt(number,10);
	return array.includes(number)
}