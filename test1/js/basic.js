// const numbers = [1, 2, 3, 4,5,6,7,8,9,10,11,12,13]
// numbers.forEach(function (el) {
//     if (el % 2 == 0) {
//         console.log(el);
//     }
// })
//
// const doubles = numbers.map(function (num) {
//     return num * 2;
// }
// )
// console.log(doubles);
/*
map exercises
 */
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
// const firstNames = fullNames.map(s => {
//     return s.first;
// })
// console.log(firstNames);

/*
arrow functions
 */
// const add = (x, y) => {
//     return x + y;
// }
// const square = (x) => {
//     return x * x;
// }
// const rollDie = () => {
//     return Math.floor(Math.random() * 6 + 1);
// }
//
// const triple = num => {
//     return num * 3;
// }
//exercises arrow function
// const greet = name => {
//     return `Hey ${name} !`;
// }
// console.log(greet("Duong"));

//implicit returns
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
// // console.log(rollDie());
// const add = (a, b) => a + b
// console.log(add(3, 4));

// setTimeout(() => {
//     console.log("Hello");
//     }
//
// , 3000);
//
// setInterval(() => {
//     console.log("Hello");
// })


// const nums = [9,8,7,6,5,4,3,2,1];
// const odds = nums.filter(n => n % 2 === 1);
// console.log(odds);
//
// const evens = nums.filter((n) => {
//     return n % 2 === 0;
// })
// console.log(evens);


// const nums = [9, 8,7,6,5,4,3,2,1];
// console.log(nums.every(s => s > 5));
// console.log(nums.some(s => s > 5));

// const nums= [3,5,7,9,11];
// const res = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
//
// console.log(res);
// const res = nums.reduce((min, price) => {
//     console.log(nums);
//     if (price > min) {
//         return price;
//     }
//     return min;
// })
// console.log(res);
// const person  = {
//     firstname: 'Duong',
//     lastName: 'Vu',
//     fullName: () => {
//         return `${this.firstname} ${this.lastName}`;
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName())
//         }, 3000)
// }
// }
// // console.log(person.fullName());
// console.log(person.shoutName());

//default params
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }
// function greet(person, msg = "Hello", punc = "!") {
//     return `${msg} ${person} ${punc}`;
// }
// console.log(greet("Duong"));


//spread
// const nums = [13,4,5,21,3,3,1,2,7,5,4,2,8923812];
// console.log(Math.max(...nums));
// console.log(Math.max(nums));
// console.log(..."Hello");


// const cats = ['blue','scout', 'rocket'];
// const dogs = ['rusty', 'wyatt'];
// const allPets = [...cats, ...dogs];
// console.log(allPets);
// console.log([...cats, ...dogs, 'Duong']);

// const dogs = {
//     color: "black",
//     legs: 4
// };
// const dogs1 = {...dogs, bark: 'goaf'};
// console.log(dogs1);


//rest params
// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// }
//
// console.log(sum(1,2,3,4,5,6));

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold medal goes to ${gold}`);
//     console.log(`Silver medal goes to: ${silver}`);
//     console.log(`And thanks to everyone else: ${everyoneElse}`);
// }
// console.log(raceResults('Duong', "tung", "lam", "nam"));

//destructuring arrays
// const scores = [12312,412,412312,31,23,124,12,4,12,31,23,12,124124124,123123,123123123,123,123];
//
// const [gold, silver, ...everyoneElse] = scores;
// console.log(gold);
// console.log(silver);
// console.log(everyoneElse);

//destructuring object

const user = {
    username: 'duongduongduong',
    firstName: 'Duong',
    lastName: 'Vu',
    age: 23,
    email: 'test@gmail.com'
}
//
// const {username, firstName, lastName, ...bio} = user;
// console.log(username);
// console.log(bio);

//destructuring params
function fullname(user) {
    const {username, firstName, lastName} = user;
    return `${username} ${firstName} ${lastName}`;
    // return `${user.firstName} ${user.lastName}`;
}
console.log(fullname(user));