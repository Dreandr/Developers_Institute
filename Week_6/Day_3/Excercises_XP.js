//Excercise 1
const add = a => b => a + b;

//Excercise 2
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);
//13 -- we are effectively calling addTo with 10 and 3

//Excercise 3
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//31

//Excercise 4
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17

//Excercise 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//16