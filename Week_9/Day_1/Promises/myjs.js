console.log("promises")

// const promise = new Promise(function(resolve, reject){

// });

// const promise = new Promise((resolve, reject) => {

// })

const flip = () => {
	let x = (Math.floor(Math.random()*2) == 0);
	if (x){
		return 'head';
	} else {
		return 'tail';
	}
}

// const flipACoin = new Promise((resolve, reject) => {
// 	const flipResult = flip();
// 	if (flipResult){
// 		resolve();
// 	} else {
// 		reject();
// 	}
// })

console.log("I am about to flip a coin");

// const flipACoin = new Promise((resolve, reject) => {
// 	const flipResult = flip();
// 	if (flipResult){
// 		resolve(`Here is the coin flip result ${flipResult}`);
// 	} else {
// 		reject();
// 	}
// })

// flipACoin.then((result) => {
// 	console.log(result);
// })
// .catch(err => {
// 	console.log("something happened")
// })
// .finally(() => {
// 	console.log("We done, boys")
// })

// console.log("I have flipped the coin");

// callUser(id => {
// 	const res = doSomething();
// 	callApi (res => {
// 		doSomethingElse()
// 	})
// })

// const sample = () => {
// 	try {
// 		const a = 1;
// 		const b = 2;
// 		return a+b;
// 	} 
// 	catch(err){
// 		console.log(err)
// 	}
// }

// const flipACoin = new Promise((resolve, reject) => {
// 	const flipResult = flip();
// 	if (flipResult){
// 		resolve(`Here is the coin flip result ${flipResult}`);
// 	} else {
// 		reject();
// 	}
// })
// flipACoin
// .then(() => {
// 	doSomething()
// })
// .then(() => {
// 	doSomethingElse()
// })
// .then(() => {
// 	doSomething3()
// })

// const promise = new Promise((resolve,reject) => {
// 	setTimeout(() => {
// 		resolve();
// 	}, 2000)
// })
// .then((result) => {
// 	console.log("Done1")
// })
// .then((result) => {
// 	setTimeout(() => {
// 		console.log("Done2")
// 	}, 5000)
// })
// .then(() => {
// 	console.log("Done3")
// })

// const flipACoin = new Promise((resolve, reject) => {
// 	const flipResult = flip();
// 	if (flipResult){
// 		resolve(`Here is the coin flip result ${flipResult}`);
// 	} else {
// 		reject();
// 	}
// })
// flipACoin
// .then(result => {
// 	return result;
// })
// .then(result => {
// 	return result + " 1 ";
// })
// .then(result => {
// 	console.log(result + " 2 ");
// })

function testIfAboveTen(num){
	return numCheck = new Promise((resolve, reject) => {
		if (num){
			resolve(num>10);
		} else {
			reject("Something's off");
		}
	})
}
testIfAboveTen(5).then(result =>{
console.log(result)
}) 

// function makeAllCaps(arr) {
// 	return allCaps = new Promise((resolve, reject) =>{
// 		let count = 0;
// 		arr.forEach((val) =>{
// 			if (typeof val != "string"){
// 				count += 1
// 			}
// 		})
// 		if (count == 0){
// 			arr.forEach((val, ind, arr) => {
// 				arr[ind] = val.toUpperCase()
// 			})
// 			resolve(arr)
// 		} else {
// 			reject("Error: non-string values in the array!")
// 		}
// 	})
// }

// function sortWords(arr) {
// 	return sortingWords = new Promise((resolve, reject) =>{
// 		let count = 0;
// 		arr.forEach((val) =>{
// 			if (typeof val != "string"){
// 				count += 1
// 			}
// 		})
// 		if (count == 0){
// 			arr1 = arr.sort()
// 			resolve(arr1)
// 		} else {
// 			reject("Error: non-string values in the array!")
// 		}
// 	})
// }
// let arr = ["cucumber", "avocado", "banana"]
// sortWords(arr).then(result => {return makeAllCaps(result)}).then(result => {console.log(result)})
// makeAllCaps(arr).then(result => {sortWords(result)}).then(result => {console.log(result)})
	// {sortWords(result)}).then(result => {console.log(result)})

fetch("https://jsonplaceholder.typicode.com/users")
.then(result => {
	return result.json()
})
.then(data => {
	console.log(data)
})
.catch(err => {
	console.log(err)
})