const array = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let array1 = [];
array.forEach((value) => { array1.push(`!${value["username"]}`)});
let array2 = [];
array.forEach((value) => { value["score"] > 5 ? array2.push(value["username"]) : null });
array2;
let score = 0;
 array.forEach((value) => {score = score + value["score"]});
score;