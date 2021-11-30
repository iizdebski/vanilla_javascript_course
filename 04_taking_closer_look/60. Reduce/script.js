// ARRAY ITERATORS
// REDUCE
// loop through array
// call a callback function
// returns new array
// REDUCES THE VALUE TO A SINGLE VALUE!!!;
// first parameter ('acc') ===== total of all calculations;
// second parameter (''curr) ===== current value in the array

// const numbers = [0,1,2,3,4,5];
// const fruits = ['orange', 'pear', 'banana', 'orange', 'pear', 'banana', 'apple'];

// const total = numbers.reduce(function(acc,curr){
//     console.log(curr);
//     console.log('this is total ' + acc);



//     acc = acc + curr;
//     return acc;
// },0);
// console.log(total);

// const numbers = [0,1,2,3,4,5];
// const fruits = ['orange', 'pear', 'banana', 'orange', 'pear', 'banana', 'apple'];

// const distinct = fruits.reduce(function(acc,curr){
//     console.log(curr);
//     if(acc.indexOf(curr) === -1){
//         acc.push(curr);
//     }
//     return acc;
// },[])
// console.log(distinct);

const numbers = [0,1,2,3,4,5];
const fruits = ['orange', 'pear', 'banana', 'orange', 'pear', 'banana', 'apple','orange'];

const types = fruits.reduce(function(total,fruit){
    if(total[fruit]){
        total[fruit] +=1;
    }
    else{
        total[fruit] = 1;
    }

    return total;
},{})
console.log(types);