//Excercise 1
function compareToTen(num){
	return numCheck = new Promise((resolve, reject) => {
		if (num){
			resolve(num>10);
		} else {
			reject("Something's off");
		}
	})
}
compareToTen(5).then(result =>{
console.log(result)
}) 
//false

//Excercise 2
function makeAllCaps(arr) {
	return allCaps = new Promise((resolve, reject) =>{
		let count = 0;
		arr.forEach((val) =>{
			if (typeof val != "string"){
				count += 1
			}
		})
		if (count == 0){
			arr.forEach((val, ind, arr) => {
				arr[ind] = val.toUpperCase()
			})
			resolve(arr)
		} else {
			reject("Error: non-string values in the array!")
		}
	})
}

function sortWords(arr) {
	return sortingWords = new Promise((resolve, reject) =>{
		let count = 0;
		arr.forEach((val) =>{
			if (typeof val != "string"){
				count += 1
			}
		})
		if (count == 0){
			arr1 = arr.sort()
			resolve(arr1)
		} else {
			reject("Error: non-string values in the array!")
		}
	})
}
let arr = ["cucumber", "avocado", "banana"]
sortWords(arr).then(result => {return makeAllCaps(result)}).then(result => {console.log(result)})