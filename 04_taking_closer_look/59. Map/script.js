// ARRAY ITERATORS
// map
// loop through array
// call a callback function 
// returns new array
// filter change size of array (but not the value) 
// by looking at condition map changes the values in the array 
// but does not change the size

// const numbers = [0,1,2,3,4,5];
// const names = ['bob', 'susy', 'arnold'];
// for loop
// let timesTwo = [];
// for (let i=0; i< numbers.length; i++){
//     let times = numbers[i] * 2;
//     timesTwo.push(times);
// }
// console.log(timesTwo);

const numbers = [0,1,2,3,4,5];
const names = ['bob', 'susy', 'arnold'];

const timesTwo = numbers.map(function(number){
    return number * 2;
})
console.log(timesTwo);

const fullNames = names.map(function(name){
    console.log(name);
    return `${name} anderson`;
})

console.log(fullNames);