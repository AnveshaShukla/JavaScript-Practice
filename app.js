// console.log("MERGED CLASS 1 ES6");

// var arr = [1, 2, 3, 4];
// console.log(arr[2]);

// var [one, two, three, four, five] = arr; //ES6 Destructuring
// console.log(three);
// console.log(four);
// console.log(five);

// function getscores() {
// return [90, 100];
// }

//  let [x, y, z] = getscores();
//  console.log(x);
//  console.log(y);
//  console.log(z);

// const obj = {
//   fullname: "Nikhil Agarwal",
//   email: "nikhilagarwaliitkgp@gmail.com",
//   age: 20,
// };

// console.log(obj.email);

//  let { dum, age, email, fullname } = obj;
//  console.log(fullname);
//  console.log(dum);

// let person = {
//   firstname: "Nikhil",
//   lastname: "Agarwal",
//   age1: 20,
//   middlename: "DNA",
// };
// let { age1, firstname, lastname, middlename = "" } = person;
// console.log(age1);
// console.log(firstname);
// console.log(lastname);
// console.log(middlename);

// // function add(x, y) {
// //     return x+y;
// // }
// // console.log(add(10, 20));

// // let add = function(x,y) {
// //     return x+y;
// // }
// // console.log(add(10,20))

// let add = (x, y) => {
//   return x + y;
// };
// console.log(add(10, 20));

// const array=[1,2,3,4]
// console.log(array)

// const [one, two, three, four,five]=array  // ES-6 Destructuring
// console.log(five)

const o = {
  n1: "Anvesha",
  email1: "anveshashukla00@gmail.com",
  age1: 20,
  dum1:"AS"
}
// console.log(o.n)// without ES-6
let {age1, n1, email1,dum1=""}=o;
console.log(dum1) //Object destructuring

// let add=function(x,y){
//   return x+y
// } 
// console.log(add(10,20)) //ES-6

let addition=(x,y) => x+y;
console.log(addition(20,20))