let arr = [5,0,9,1,7,4,2,6,3,8];
function arraySorter(array){
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
	return array;	
}

