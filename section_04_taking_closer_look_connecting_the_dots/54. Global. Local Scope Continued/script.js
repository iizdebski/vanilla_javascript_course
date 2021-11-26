
// let sayHi = 'hello';

// function getGreeting(){
//     let sayHi = 'hello from function';
//     let peterTheGreat = 'peter the great'
//     peter = 'peter';
//     console.log(sayHi);
// }

// getGreeting();

// console.log(peter);
// console.log(peterTheGreat);

let generalNumber = 5;

function add(num1,num2){
    
    let result = num1+num2+generalNumber;
    function multiply(){
        let multiplyResult = generalNumber*result;
        console.log(multiplyResult);
    }

    multiply();
    console.log(multiplyResult);
    return result;
}

let result = add(10,20);
console.log(result);