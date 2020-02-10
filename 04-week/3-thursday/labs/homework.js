

// 1.Positive Numbers

// arr = [2,4,-3,-5,-9]
// let  newArr =arr.filter(function (arrElement) {
//     return arrElement >0 ;}
// )
// console.log(newArr);

// <-------------------------------------------------------->



// 2.Even Numbers
// arr = [2,4,-3,-5,-9]
// let newArr = arr.filter(function(arrElement){
//     return arrElement % 2 == 0;
    
//     })
//     console.log(newArr);
    

// <-------------------------------------------------------------->

// 3.Square the Numbers
// arr = [2,4,-3,-5,-9];
// let newArr = arr.map(function(arrElement){
//         return arrElement ** 2;
        
//         })
//         console.log(newArr);


// <-------------------------------------------------------------------->


// 4.Cities 1

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

//     let coolerCities = cities.filter(function(city){


        // cities.temperature = city ;
//             return city.temperature <70;
//         })
//         console.log(coolerCities);







// <----------------------------------------------------->
// 5.Cities 2
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];



//     let nameOfCity = cities.map(function(city){

        
//         return city.name;
//     })
//     console.log(nameOfCity);


// <------------------------------------------------------->



// 6.Good Job!

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.forEach(function(name){

        
//             console.log('Good Job'+ name); 
//         })
        


// <------------------------------------------------------------>



// 7.Sort an array


// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// let alph = people.sort(function(a,b){
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;

// });
// // return alp;
// console.log(alph);




// <----------------------------------------------------->



// 8.Sort an array, 2


// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// let alph = people.sort(function(a,b){
//     return b.length - a.length 
// });
// console.log(alph);

// <--------------------------------------------------------------------------------------------------------------->




// 9.Sort an array, 3

// var arr = [[1, 3, 4],[2, 4, 6, 8],[3, 6] ];













// <-------------------------------------------------------------------------------------------->



// 10.3 times




// function fun(fun){console.log("Hello, world!");}
// function call3Times(fun) { fun(); fun(); fun(); }
// call3Times(fun);





// <------------------------------------------------------------------------------->

// 11. n times




// function repeatStr(input, times) {
//     let result = input.repeat(times);
//         console.log(result);
// }
 
// repeatStr("Hello world!", 5);




// function hello(){console.log("Hello, world!")};

// function callNTimes(n, txt) { 
//     for(var i=0;i<n;i++)
//     {
//         txt();
//     };
// }
// callNTimes(5,hello); 





// <------------------------------------------------------------------------->
// 12.Sum an array

// var array = [1, 2, 3, 4, 5];
// var sum = array.reduce(function(a, b){
//     return a + b;
// }, 0);

// console.log(sum);



// <--------------------------------------------------------------------------------->




// 13.Acronym
// var arr2 = ['very', 'important', 'person'];
// function acronym(arr){
//     let str = '';
    
//     for(let i = 0; i < arr.length; i++){
//         str += arr[i][0];
//     }
    
//     return str;
// };

// console.log(actoynm(arr2));



const factorial = number => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
      product *= i;
    }
    return product;
  };
  