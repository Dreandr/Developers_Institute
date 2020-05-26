//Excercise 1
const arraySum = (array) => {
  let a = 0;
  array.forEach((value) => {a = a+value});
  return a;
}
arraySum([1,2,6,-7])

//Excercise 2
const createSet = (array) =>{
  let arr = [];
  array.forEach((value) => arr.indexOf(value) == -1 ? arr.push(value) : null);
  return arr;
}
createSet([1,1,2,3,4,4])

//Excercise 3
const cleanArray = (array) =>{
  let arr = [];
  array.forEach((value) => value == 0 ? null :
  value == undefined ? null :
  value == "" ? null :
  value == false ? null :
  value == null ? null : 
  isNaN(value) == true ? null : arr.push(value));
  return arr;
}
cleanArray([NaN, 0, 15, false, -22, '',undefined, 47, null])

//Excercise 4
const repeat = (string, num) =>{
  let str = string;
  for (let i = 0; i < num - 1; i++){
    str += string
  }
  return str;
}
repeat("Ha!", 3)