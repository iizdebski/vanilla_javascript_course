// Rest operator
// ...
// arguments variable in the function

// Rest function add (...rest)
// Spread add(...spread)

// function sum(num1,num2,num3){
//     let result = num1 + num2 + num3;
//     console.log(result);
//     console.log(arguments);
    
// }
// sum(1, 2, 3);

// function sum(...args){
//     console.log(args);

//     let result = args.filter(item => item > 3).reduce((acc, curr) => {
//         acc += curr;
//         return acc;
//     },0);
//     console.log(result);
// }
// sum(1,2,3,4,5);


function sum(value,...args){
    console.log(args);

    let result = args.filter(item => item > value).reduce((acc, curr) => {
        acc += curr;
        return acc;
    },0);
    console.log(result);
}
sum(4,1,2,3,4,5);
