// ARRAY ITERATORS
// filter
// loop through array
//call a callback function
//returns new array

// const numbers = [0, 1, 2, 3, 4, 5];
// //for loop
// let even = [];
// for(let i = 0; i< numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         even.push(numbers[i]);
//     }
// }
// console.log(even);

// const numbers = [0, 1, 2, 3, 4, 5];

// const even = numbers.filter(function(number){
// return number %2 ===0;
// })

// console.log(even);

const numbers = [0, 1, 2, 3, 4, 5];

const even = numbers.filter(function(number){
return number % 2 === 0;
})
const big = numbers.filter(function (number){
    return number > 2;
})
console.log(big);

console.log(even);