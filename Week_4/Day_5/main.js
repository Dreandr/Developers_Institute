let formula = "";
let formula2 = "";
let	numbers = [];
let	operations = [];
let	nums = [0,1,2,3,4,5,6,7,8,9,0,"."];
let	ops = ["+","-","*","/"];

function my_f(arg){
	if (nums.includes(arg) == true) {
    	formula += `${arg}`;
    	formula2 += `${arg}`;
   	 	document.getElementById("output").innerHTML = formula;
	} else if (ops.includes(arg) == true) {
		numbers.push(parseFloat(formula2, 10));
		formula2 = "";
		operations.push(arg);
		formula += arg;
		document.getElementById("output").innerHTML = formula;
	} else {
		numbers.push(parseFloat(formula2, 10));
		do{
		for (x of operations){
			if (x == "*" || x == "/"){
				if (x == "*"){
					numbers[operations.indexOf(x)] = numbers[operations.indexOf(x)]*numbers[operations.indexOf(x)+1];
					for (let y = 0; y < numbers.length; y++) {
						 if (numbers[y] === numbers[operations.indexOf(x)+1]) {
						 	numbers.splice(y, 1);
						 	break;
						 }
					}
					for (let z = 0; z < operations.length; z++) {
						 if (operations[z] === x) {
						 	operations.splice(z, 1);
						 	break;
						 }
					}
				} else {
					numbers[operations.indexOf(x)] = numbers[operations.indexOf(x)]/numbers[operations.indexOf(x)+1];
					for (let y = 0; y < numbers.length; y++) {
						 if (numbers[y] === numbers[operations.indexOf(x)+1]) {
						 	numbers.splice(y, 1);
						 	break;
						 }
					}
					for (let z = 0; z < operations.length; z++) {
						 if (operations[z] === x) {
						 	operations.splice(z, 1);
						 	break;
						 }
					}
				}
			}
		}
		for (x of operations){	
			if (x == "+" || x == "-"){
				if (x == "+"){
					numbers[operations.indexOf(x)] = numbers[operations.indexOf(x)]+numbers[operations.indexOf(x)+1];
					for (let y = 0; y < numbers.length; y++) {
						 if (numbers[y] === numbers[operations.indexOf(x)+1]) {
						 	numbers.splice(y, 1);
						 	break;
						 }
					}
					for (let z = 0; z < operations.length; z++) {
						 if (operations[z] === x) {
						 	operations.splice(z, 1);
						 	break;
						 }
					}
				} else {
					numbers[operations.indexOf(x)] = numbers[operations.indexOf(x)]-numbers[operations.indexOf(x)+1];
					for (let y = 0; y < numbers.length; y++) {
						 if (numbers[y] === numbers[operations.indexOf(x)+1]) {
						 	numbers.splice(y, 1);
						 	break;
						 }
					}
					for (let z = 0; z < operations.length; z++) {
						 if (operations[z] === x) {
						 	operations.splice(z, 1);
						 	break;
						 }
					}				
				}		
			}
		}} while (operations.length != 0);		 
	document.getElementById("output").innerHTML = numbers;
	}
}
function clear(){
	if (nums.includes(formula[formula.length-1]) == true && formula2.length != 0){
		formula = formula.substring(0,formula.length-1);
		formula2 = formula2.substring(0,formula2.length-1);
	} else if (nums.includes(formula[formula.length-1]) == true && formula2.length != 0) {
		formula = formula.substring(0,formula.length-1);
		lastNumberCut = numbers[numbers.length-1].toString().substring(0,numbers[numbers.length-1].toString().length-1);
		if (lastNumberCut.length != 0){
			numbers.pop();
			numbers.push(parseFloat(lastNumberCut, 10))
		} else {
			numbers.pop()
		}
	} else {
		formula = formula.substring(0,formula.length-1);
		operations.pop()
	}
	document.getElementById("output").innerHTML = formula;
}
function reset(){
	formula = "";
	formula2 = "";
	numbers = [];
	operations = [];
	document.getElementById("output").innerHTML = formula;
}