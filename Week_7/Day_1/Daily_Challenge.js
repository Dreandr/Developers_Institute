const users = { user1: 18273, user2: 92833, user3: 90315 };
let usersArray = [];
Object.entries(users).forEach((val) => usersArray.push(val));

usersArray.forEach((val, ind, arr) => arr[ind][1] *= 2);
console.log(usersArray);