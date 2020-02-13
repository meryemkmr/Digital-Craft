// let regex = new RegExp("digital craft");
// let regex2 = /digital crafts/;


// let someString = "kds;g;sjhs;g;s";

// let result = regex2.test(someString);
// console.log(result);


//=============================

// let pattern = /Meryem/;
// let someString = "hdfhksfvn meryem  dgjhhs";
// let result = pattern.test(someString);
// console.log(result);
// give  it false.

//===========================================
//RegExp Object Methods
// test() - tests for a match in a string. Returns true or false
// exec() - tests for a match in a string. Returns the first match
// Methods that can be used with regular Expressions
// toString() - returns the string value of the regular expression
// replace()
// match()
// matchAll()




// let pattern = /Meryem/ig;
// let someString = "hdfhksfvn meryem  dgjhhs";
// let result = pattern.exec(someString);
// console.log(result);

// let arr = someString.match(pattern);
// let arr2 = someString.replace(pattern , "komur");
// console.log(arr);
// console.log(arr2);

//===============================================
//| Matching Multiple Groups with the Pipe:

// let pattern = /Batman | Tina Fey /g;

// let str = "Batman is really cool, but not as cool as Tina Fey";
// let result = str.match(pattern);
// console.log(result);

//=================================================
//  Grouping with Parentheses
//333-333-3333

// let phonePattern = /\d\d\d-\d\d\d-\d\d\d\d/g;
// let someString = "hfdsfnkdn 333-333-3333 nkshdfjsbs 343-343-4343 jdfs";
// let result = someString.match(phonePattern);
// console.log(result);


//================================================

// | Grouping with Pipe Symbol

// let pattern = /Bat(man|mobile|copter|bat)/g;  // g give it array   gi is casesensetive
// let str = "Batman lost a wheel";
// let result = str.match(pattern);
// console.log(result);


//========================================================

// //? Optional Matching with the Question Mark

// let pattern = /\d\d\d(-)?(.)?\d\d\d(-)?(.)?\d\d\d\d/g
// let str = "this is a phone number : 333.333.3333";
// let result = str.match(pattern);
// console.log(result);


//=====================================
//* Matching Zero or More with the Star

// let pattern = /Bat(wo)*man/g;
// let str1 = "Batwoman Batman of Batwowowowoman";
// let str2 = "The Adventures of Batwoman";
// let str3 = "The Adventures of Batwowowowoman";
// let result = str1.match(pattern);
// console.log(result);

//===========================================
//!  + Matching One or More with the Plus

// let pattern = /Bat(wo)+man/g;
// let str1 = "Batwoman Batman of Batwowowowoman";
// let str2 = "The Adventures of Batwoman";
// let str3 = "The Adventures of Batwowowowoman";
// let result = str1.match(pattern);
// console.log(result);

//========================================

//! Pattern-matching

// let pattern = / \s\s/g;
// let str = "This is very long day";
// let result = str.replace("","");
// console.log(result);

//=========================================
