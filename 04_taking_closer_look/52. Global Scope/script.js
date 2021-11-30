// any variable outside code block is said to have GLOBAL SCOPE!!!!!
// can be accessed anywhere in the program
//IT IS NOT A GOOD PRACTICE!!!!!!!!!


let sayHi = 'Hello';
//let sayHi = 'Greeting';

function getGreeting(){
    console.log(sayHi);
}

getGreeting();

if(5>2){
    console.log(sayHi);
}
