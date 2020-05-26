//Excercise 1
let menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "desert",
    name : "Chocolate Cake"
  }
]
menu.some((value) => { return value["type"] == "desert";})
menu.every((value) => { return value["type"] == "starter";})
if (menu.some((value) => { return value["type"] == "main course";}) == false) {
  menu.push({type: "main course", name: "Burger"})
}
 let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

 menu.some((value) => { vegetarian.some((val) => { return value["name"].toLowerCase().indexOf(val) != -1;}) == true ? value.vegetarian = true : value.vegetarian = false})

 //Execercise 2
 function stringChop(string,num){
  let strChopped = [];
  let maxId = Math.round(string.length/num)
  for (let i = 0; i < maxId; i++){
    strChopped.push(string.substring(i*num,i*num+num))
  };
  return strChopped;
}
stringChop('w3resource',2)

//Excercise 3
const searchWord = (string, word) => {
  let arr = string.split(" ");
  let count = 0;
  arr.forEach((value) => {
    if (value == word) {
      count += 1
    }
  });
  count > 0 ? console.log(`The word was found ${count} times.`) : console.log("Word not found.")
  }
searchWord('The quick brown fox', 'fox')