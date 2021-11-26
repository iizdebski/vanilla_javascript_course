
// javascript functions are higher order functions
//pass a function as an argument
// return function from function

// built-in functions
//callback functions

function functionName(para1,para2){
    //code here
}

// setTimeout(function(){
//     alert('Hello World');
// },3000)

// //setInterval(sayHello,2000);

// function sayHello(){
//     alert('set interval is running');
// }

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let even = numbers.filter(isEven);

// function isEven(singleNumber){
//     return singleNumber%2===0;
// }
// console.log(even);

let numbers = [1,2,3,4,5,6,7,8,9,10];
let even = numbers.filter(function(number){
    if(number%2===0){
        return number;
    }
});
console.log(even);

const mainBtn = document.getElementById('mainBtn');
mainBtn.addEventListener('click', showAlert);

function showAlert(){
    alert('you just clicked a button');
}