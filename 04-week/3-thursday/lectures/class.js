// function merFun(name) {

//     return "what's up" + " " +name;

// }   
// var greeting = merFun("Meryem");
// console.log(greeting);


// let add = function (num1, num2){
//     return num1 + num2;
// }

// let subract = function(num1, num2){
//     return num1- num2;
// }

// let calc = function(num1,num2,oparation){
//     return oparation(num1,num2);
// }
// var addResult = calc(2,4,add);
// console.log(addResult);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    ];
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// // <---------------------------only companies name---------------->
//     for (let index = 0; index < companies.length; index++){
//         console.log(companies[index].name);
//     }
//     // <-------------------------only companies nane 2------------------->
//     companies.forEach(function(company) {
//         console.log(company.name);
//     })

// let newCompanyList = companies.map(function(company){

//     companies['start'] = company - 5;
//     return company;
// })
// console.log(newCompanyList);

// let retailCompanies = companies.filter(function (company) {
//     return companies.category =='Retail';
    
// })
// console.log(retailCompanies);

// let arr = [50,2,60,4,5];
// let  newArr =arr.filter(function (arrElement) {
//     return arrElement < 10;
    
// })
// console.log(newArr);

// <----------------Multiply by 2 ----------->
// newArr = []
// for(let index = 0; index<arr.length; index++){
//     newArr.push(2*arr[index]);

// }
// console.log(newArr);
// <-----------------Multiply by 2 second---------->
// let newArr = arr.map(function (element) {
//     return 2* element
// })
// console.log(newArr);

// <----------------subtract 6 ----------->

// let newArr = arr.map(function (element) {
//     return element - 6
    
// })
// console.log(newArr);

// <----------------subtract 6 -2----------->
// newArr = []
// for (let index= 0; index<arr.length; index++){
//     newArr.push(arr[index]-6)
// }
// console.log(newArr);




let arr = [50,2,60,4,5];
let myBoolen