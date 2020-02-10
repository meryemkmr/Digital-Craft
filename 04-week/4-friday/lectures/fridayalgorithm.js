
// Challenge 1
// The Collatz Conjecture goes like this:

// Take any number n. If n is even, divide it by 2, if n is odd, multiply it by 3 and add 1. Repeat the process indefinitely, and you'll eventually reach 1.

// Given a num variable, can you print all the numbers in num's Collatz sequence until 1 is reached? Print the numbers space-separated (and each test case on its own line).




function num1(n){
    if(n == 'even'){
        return n % 2 == 0;

    }
    else (n == 'odd')
        return 3n + 1;
    
}

while (n != 1){
    let num = function num1(even)
    console.log(num);
}




// <===============================================================================================>


// Challenge 2
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.





















// <===========================================================================================================>

// Challenge 3
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


















// <=======================================================================================================================>



// Challenge 4
// Design an OO parking lot. What classes and functions will it have. It should say, full, empty and also be able to find spot for Valet parking. The lot has 3 different types of parking: regular, handicapped and compact.

// Use Case:

// 1. Customer are given a ticket that they can use to redeem to get their vehicle back

// 2. Parking spots come in three sizes, small, med, large

// 3. Thee types of vehicles, small[Two Wheeler], med[Car], large[Bus]

// - a small vehicle can park in a small, medium, and large spot

// - a medium vehicle can park in a medium and large spot

// - a large vehicle can park in a large spot

// 4. There are multiple entry gates to park vehicles. So a Vehicle should assign the nearest posible parking spot.