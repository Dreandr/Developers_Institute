//Excercise 1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});
//There is a mistake in the code (two returns, wrong if statement syntax, extra curly brackets), it will crash.

[1, 2, 3].map(num => typeof num === 'number' ? num * 2 : null)
//[2,4,6]

//Excercise 2
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
//[1, 2, 0, 1, 2, 3]

//Excercise 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// //i is the index -> 0,1,2,3,4,5.
//Pure function: 
const arrayX2 = (arr) => {
  arr.forEach((val, ind, arr) => arr[ind] = val*2);
  return arr;
}
arrayX2(arrayNum)

//Excercise 4
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array2 = array.map((val, ind, arr) => [0,1,2].indexOf(ind) == -1? arr[ind] = val[0][0] : arr[ind] = val[0])

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
greeting2 = greeting.map(val => {
  let result = ""
  for (i of val){
    result += " " + i
}
return result;
})

//Excercise 5
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
greeting2 = greeting.map(val => {
  let result = ""
  for (i of val){
    result += " " + i
}
return result;
}).reduce((acc, cur) => {
    return acc + cur;
  },
  "",
);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const untrap = (arr) =>{
  while (typeof(arr[0]) == "object"){
    arr = arr[0];
  }
  return arr;
}
untrap(trapped)