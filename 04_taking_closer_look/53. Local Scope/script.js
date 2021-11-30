// any variable outside code block is said to have GLOBAL SCOPE!!!!!
// can be accessed anywhere in the program
//IT IS NOT A GOOD PRACTICE!!!!!!!!!
//LOCAL SCOPE


let sayHi = 'Hello';
//let sayHi = 'Greeting';

function getGreeting(){
    // sayHi = 'Peanut Butter and Jelly'  
    let sayHi = 'Hello from function';
    console.log(sayHi);
    let pants = 'big pants';
    console.log(pants);
}
//console.log(pants);

getGreeting();

if(5>2){
    // sayHi = 'Udemy is the best';

    let sayHi = 'Hello from if statement';   

    //console.log(sayHi);
    let shirts = 'small shirts';
    console.log(shirts);
}
console.log(shirts);

console.log(sayHi);