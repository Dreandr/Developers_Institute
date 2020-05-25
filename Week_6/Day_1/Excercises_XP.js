//Excercise 1
let sum = prompt("How much do you have in the account?");
const vat = 1.17;
let balance = ["+50", "-100", "+75", "-25", "+200","-50"];
const processBalance = (balance) => {
  balance.forEach((val, ind, arr) => {
  if (val[0] != "+") { arr[ind] = `${parseInt(val,10)*vat}`}  
  });
};
function doAccounting(account, balance) {
  account = parseInt(account, 10)
  processBalance(balance);
  balance.forEach((val) => account = account+parseInt(val,10));
  return account;
}
doAccounting(sum, balance);

//Excercise 2
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
color.forEach((val, ind) => {console.log(`#${ind+1} choice is ${val}`)});

//Excercise 3
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
let ordinal = ["th","st","nd","rd"];
color.forEach((val, ind) => {
  ind == 0 ? console.log(`#${ind+1}${ordinal[1]} choice is ${val}`) :
  ind == 1 ? console.log(`#${ind+1}${ordinal[2]} choice is ${val}`) :
  ind == 2 ? console.log(`#${ind+1}${ordinal[3]} choice is ${val}`) : console.log(`#${ind+1}${ordinal[0]} choice is ${val}`)});

//Excercise 4
const is_string = (arg) => {
  typeof(arg) == "string" ? console.log(true) : console.log(false)
};
is_string('hello');
is_string([1, 2, 4, 0]);