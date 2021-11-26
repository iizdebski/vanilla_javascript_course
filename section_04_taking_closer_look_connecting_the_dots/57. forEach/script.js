//forEach
//loop through array
//call a callback function

const names = ['john', 'bob', 'susy'];

// for loop
// for (let i=0; i< names.length; i++){
//     console.log(names[i]);
// }

// names.forEach(function(name){
// console.log(name);
// })

// names.forEach(function(name){
// console.log(name);
// })

names.forEach(showName);

function showName(name, index){
    console.log(`${name} is in ${index}`);
    let fullname = `${name} anderson`;
    console.log(fullname);
}