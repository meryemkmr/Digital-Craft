


// console.log('Hello World');

// ----------------------------------------------

// "Hello!"
// 'Hello!'
// `Hello
// There!
// `
// ----------------------------------------------------

// "Hello" + " " + "There"


// var veryLongVariableName = "";
// // Yes!
// var very_long_variable_name = "";
// // Nope.
// --------------------------------------------------------


// var hey = "Hello There";
// console.log(hey.length)
// 11

// var undefined; //Undefined
// var number = 4; //integer
// var float = 4.1;//float
// var string = "hello world"; 
// console.log(undefined);
// console.log(number);
// console.log(float);
// console.log(string);
// ---------------------------------
// var number = 4;
// var float = 4.1;
// ----------------------------------
// var emptyString = "";
// var string = 'This is a string';
// var string = "a";
// ----------------------------------
// String Operators
// var concat = "hello" + "world"; //helloworld
// var concat2 = 4 + "world"; //4world
// var length = concat2.length; //6
// var indexWorld = concat.indexOf('world'); //5
// ---------------------------------
// Boolean Operators
// var boolean = true;
// var not = !boolean; //false
// var and = boolean && false; //false
// var or = boolean || false; // true;
// var equals = true == false; //false;

// console.log(boolean);
// console.log(not);
// console.log(and);
// console.log(or);
// console.log(equals);
// ----------------------------------

// -----------------------------------
// if (statement)
// var age =22;
// if (age >= 21) {
//     console.log("You get free beer");
//   }
// ------------------------------------
// if - else if - else Statements
// if (age >= 21) {
//   console.log("You get free beer");
// } else if (age < 18) {
//   console.log("What are you even doing here?");
// } else {
//   console.log("Sorry no beer for you");
// }
// --------------------------------------
// Using if/else if blocks
// expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
//     console.log('Mangoes are $0.45 a pound.');
// {
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');

//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.');
// }
// ---------------------------------------------------------------
// Switch Statement
    // expr = "Papayas";
    // switch (expr) {
    //     case 'Orange':
    //         console.log('Oranges are $0.59 a pound.')
    //     //Statements executed when the
    //     //result of expression matches value1
    //         break;
    //     case 'Mangos':
    //         console.log('Mangoes are $0.45 a pound.')
    //     //Statements executed when the
    //     //result of expression matches value2
    //         break;
    
    //     case 'Papayas':
    //         console.log('Mangoes and papayas are $2.79 a pound.');

    //     //Statements executed when the
    //     //result of expression matches valueN
    //         break;
    //     default:
    //         console.log('Sorry, we are out of ' + expr + '.');
    //     //Statements executed when none of
    //     //the values match the value of the expression
    //     break;
    // }
//   ________________________________________________________________
//   switch
//   var expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }
// {/* // notes */}
// _________________________________________________________________
// while (statement){
// code block
// }
// var count = 0;
// while (count < 10){
//     count = count + 1;
//     console.log(count);
// }
// {/* notes */}
// ____________________________________________________________________
// The good ol' while loop, with post-increment
// while (statement){
// code block
// }
// var count = 0;
// while (count < 10) {
//     console.log(count);
//     //count = count + 1;
//     count++;
// }
// {/*  notes */
// ______________________________________________________________________
// The for loop
// for (start; test; increment;){
// code block
// }
// for (var count=0; count < 10; count ++)
// {
//     console.log(count);

//     for(var inner = 0; inner<3; inner++){
//         console.log(inner);
//     }
    
// }
// // notes
// ______________________________________________________________________
// A variable assigned to an empty array
// var arrayName = []
// var lottoNums = [];
// // notes
// ______________________________________________________________________
// Array.push()
// Adding values to an array
// var lottoNums = [];
//  lottoNums.push(23);
//  lottoNums.push(11);
//  lottoNums.push(43);
//  lottoNums.push(19);
//  lottoNums.push(37);
//  lottoNums.push(16);
// console.log(lottoNums);
// // [23, 11, 43, 19, 37, 16]
// // notes
// _________________________________________________________________
// A variable assigned to an array of numbers
// var lottoNums = [23, 11, 43, 19, 37, 16];
// console.log(lottoNums[1])

// lottoNums[2] = 34;
// console.log(lottoNums[2])

// // notes
// ________________________________________________________________
// Accessing an element in an array
// arrayName[indexOfArrayElement]
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// console.log(lottoNums[0]); //23
// console.log(lottoNums[3]); //19
// No error here:
// console.log(lottoNums[300000]);
// //undefined
// // notes
// _________________________________________________________________
// Reassigning an element in an array
// arrayName[indexOfArrayElement]
// = newValue
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// lottoNums[0] = 100;
// console.log(lottoNums[0]);
// // notes
// _________________________________________________________________
// Array.pop()
// Removing an element form the end of an array
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// lottoNums.pop(); //removes *and* returns 16
// var thePoppedNumber = lottoNums.pop();
// console.log(thePoppedNumber); //37;
// // notes
// ________________________________________________________________
// Array.shift()
// Removing an element from the end beginning an array
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var theShiftedNumber = 
// lottoNums.shift();
// console.log(theShiftedNumber); // 23
// // notes
// _________________________________________________________________
// splice(beginI, num)
// Removing an element from the middle of an array
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 1);

// console.log(arrayOfSplicedValues);
// console.log(lottoNums)
// Multiple values
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 3);
// console.log(arrayOfSplicedValues); 
// //[43, 19, 47]
// // notes
// ________________________________________________________________
// slice(beginI, endI)
// Removing an element from the middle of an array
// The slice() method returns a shallow copy of a portion of an array into a new 
// array object selected from begin to end (end not included). The original array will not be modified.
// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]
// // Multiple values
// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
// // notes
// _________________________________________________________________
// S.split('seperator')
// Converting a string to an array of words
// var words = 'oh hey how is it going';
// var newArray = words.split('');

// console.log(newArray)
// var newArray1 = newArray.join('');
// console.log(newArray1)
// var newArray2 = newArray.reverse('');
// console.log(newArray2)

// console.log(words);
// // ["oh", "hey", "how", "is", "it", "going"]
// // notes
// ________________________________________________________________
// for
// Looping through an array
// for ([initialization]; [condition]; [final-expression]) statement
// var words = 
// 'oh hey how is it going'.split(' ');
// for(var i = 0; i<words.length; i++)
// {
//     console.log(words[i]);
// }
// // notes
// _________________________________________________________________
// Array.join()
// Putting an array together into a string
// var words = 'oh hey how is it going'.split(' ');
// for(var i = 0; i<words.length; i++)
// {
//     console.log(words[i]);
// }
// console.log(words.join(' '));
// //'oh hey how is it going'
// // notes
// ________________________________________________________________
// S Objects: like a python dictionary, only different
// var objectName {key: value}
// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'

// }
// console.log(characterSheet['name'])

// var characterSheet = {}
// // notes
// _________________________________________________________________
// Adding a property to an object
// objectName[keyName]
// = newValue
// var characterSheet = {};
// characterSheet['name'] = 'tim berners-lee';
// characterSheet['title'] = 'sir';
// characterSheet['powers'] = 'invent the web';
// // notes
// ________________________________________________________________
// delete
// Deleting properties from an object
// delete objectName[keyName]
// var characterSheet = {};
// characterSheet['name'] = 'tim berners-lee';
// characterSheet['title'] = 'sir';
// characterSheet['powers'] = 'invent the web';
// delete characterSheet['title'];
// console.log(characterSheet)
// notes
// _________________________________________________________________
// Dynamic key names
// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var key = 'name';
// console.log(characterSheet[key])
// notes
// ________________________________________________________________
// Dynamic key names in an array
// var characterSheet = {
//     name: 'tim' , 
//     title: 'sir',
//     powers: 'invent the web'
// };

// var keys = ['name', 'title', 'powers'];
// for (var i=0; i<keys.length; i++){
//     var keyName = keys[i];
//     console.log(characterSheet[keyName]);
// }
// // notes
// _________________________________________________________________
// Dynamic key names in an array, alternative
// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var keys = ['name', 'title', 'powers'];
// for (var i = 0; i< keys.length; i++){
//     // var keyName = keys[i];
//     //console.log(characterSheet[keyName]);
//     console.log(characterSheet[keys[i]]);
// }
// notes
// ________________________________________________________________
// Obtaining the keys programmatically
// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invernt the word'
// };
// var keyNameList = Object.keys(characterSheet);
// for (var i= 0; i<keyNameList.length; 
//     i++){
//     console.log(characterSheet[keyNameList[i]]);
// }
// // notes
// _________________________________________________________________
// function
// function fname (arguments){
// code block
// }
// function hello (name) {
//     var output = 'Hello ' + name;
//     console.log(output);
//     return output;
//   }
// // notes
// ________________________________________________________________