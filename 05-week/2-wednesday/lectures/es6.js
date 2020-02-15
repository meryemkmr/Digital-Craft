// console.log(x);
// ReferenceError: x is not defined
// var x = 'hi';
//====================================================
// console.log(x);
// ReferenceError: error
// let x = 'hi';
//====================================================
// var a = 3;
// if(true){
//     var a = 4;
//     console.log(a);
// }
// console.log(a);
// both of  them console out 4.
//======================================================
// var a = 3;
// if(true){
//     let a = 4;
//     console.log(a);
// }
// console.log(a);
// inside of block  is 4 outside of block is 3

//======================================================
// let a = 3;
// if(true){
//     let a = 4;
//     console.log(a);
// }
// console.log(a);
// inside of block  is 4 outside of block is 3
//=======================================================
// var i = 0;
// for(var i = i; i<10; i ++){
//     console.log(i);//from 1-9
// }
// console.log("outside of block :" , i); //10

//======================================================
// var i = 0;
// for(let i = 1; i<10; i ++){
//     console.log(i);//from 1-9
// }
// console.log("outside of block :" , i);//0

//======================================================
// let i = 0;
// for(let i = 1; i<10; i ++){
//     console.log(i);//from 1-9
// // }
// console.log("outside of block :" , i)

// give it error

//=======================================================

// let today = new Date();
// console.log(today.toDateString());
// console.log(`Today's date is: ${today.toLocaleDateString()}`);

//==============================================================
//Destructuring Arrays

// let myArray = [4,5,6,7,8];
// let [a,b,c,d,e] = [4,5,6,7,8];

// console.log(a);
// console.log(b);
// console.log(c);
//==============================================
// let myArray = [4,5,6,7,8];
// let [a,b,c,d,e] = myArray;

// let a = myArray[0]; //4
// let b = myArray[1]; //5
// let c = myArray[2];//6
//=================================================

// let add = (a,b)=>{
//     return a+b;
// }
// console.log(add(4,5));

//===========================================================================
//  4. week tuesday homework
// 1.Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
// let madlib = (name,subject)=>{
//     console.log(`${name}'s favorite subject in school is ${subject}`);
// }
// madlib("Meryem","Math");
//==============================================================
// let nums = [2,3,4,5];
// let newArray = nums.map(()=>{

// }) //   if there is no paramether

//===============================================================
let nums = [2, 3, 4, 5];
let newArray = nums.map(num => {
  return num * 2;
});
console.log(nums);
console.log(newArray);

// ==============================================================

// let obj = {
//     x:5,
//     y:20,
//     z:3,
// }
// let mult = (object)=>{
//     let {x,y,z} = object;
//     return x*y*z;
// }
// console.log(mult(obj));

//===============================================================
// add event function
// let div = document.getElementById("myId");
// div.addEventListener("click",(e)=>{

// })

//=========================================================

// let addTwoNumbers = (x, y)=> {
//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }
// let result = addTwoNumbers(2)
// console.log(result);

// ES6================

// let addTwoNumbers=(x=0, y=0)=> {
//     return x + y;
// }
// console.log(addTwoNumbers(2, 4));
// console.log(addTwoNumbers(2));
// console.log(addTwoNumbers());

//=======================================

// let multiplyNums = ()=> {

//     for (let i = 0; i < arguments.length);
//     console.log(arguments[i]);

// }

// multiplyNums(3,4,7,8)

//==================================
// let multiplyNum= (...args)=> {
//     let m = 1
//     for (let i of args) {
//         m = m*i;
//     }
//     console.log(m);
//   }

//   multiplyNum(4,6,7)

//===================================

// let a ,b,c, d,arr;
// a = [1,2];
// b = [3,4];
// c= [5,6];
// d = [7,8]
// arr = [0, ...a, ...b, ...c, ...d,9,10]
// console.log(arr);

//====================================

// swap
// let a,b;
// a = 'first';
// b = 'second';
// [b,a]=[a,b]
// console.log(a);
// console.log(b);

//================================

// let a = 4;
// if(a == 4){
//     console.log(`a is equal to 4`);
// }
// else{
//     console.log(`a is not equal to 4`);

// }

//==================================================
// (condition)? (true block): (false block)
// let a =4;
// (a==4)? console.log(`a is equal to 4`): console.log(`a is not equal to 4`);

//============================================================================
// class Parent {
//     parentGreeting = ()=>{
//         console.log("I'm the parent" );
//     }
// }

// class Person extends Parent {
//     constructor(firstName, lastName, age){
//         super();
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.count = 0;
//     }
//     greeting = ()=> {
//         console.log(`Hello ${this.firstName} ${this.lastName}!`);
//         this.count = this.count +1;
//     }
//     printCount = ()=> {
//         console.log(this.count);
//     }
// }

// let meryem = new Person("meryem","komur","33");
// console.log(meryem);
// console.log(meryem.firstName);
// console.log(meryem.lastName);
// console.log(meryem.age);
// meryem.greeting()
// meryem.greeting()
// meryem.greeting()
// meryem.printCount()
// meryem.parentGreeting()

//=============================================================
