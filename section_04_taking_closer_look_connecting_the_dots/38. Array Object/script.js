// arrays === list of values
// objects ==== collection of values

// let zero = [];
let names = ['john', 'bob', 'barry', 'olga', 'ben',1,2,3,4];
// let names2 = new Array(1,40,60);
// console.log(names);


// names[0] = 'peter';
// console.log(names[0]);


// console.log(names);

// let person = {
//     name:'bob'
// }

// console.log(person.name);

// person.name = 'susy';
let result = names.length;

console.log(result);

console.log(names[names.length-1])
//reverse
//console.log(names.reverse());
//concat
let lastNames = ['pepper', 'onion', 'banana'];
console.log(names.concat(lastNames));

//unshift
console.log(names.unshift('susy'));
console.log(names);
//shift
console.log(names.shift());
console.log(names);
//
console.log(names.push('hello world'));
console.log(names);
//pop
console.log(names.pop());
console.log(names);
//splice
// console.log(names.splice(2,3));
// console.log(names);
//sort
console.log(names.sort());
console.log(names);