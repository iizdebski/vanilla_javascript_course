// CHAINING ARRAY ITERATORS

const fruits = ['orange', 'pear', 'banana', 'orange', 'pear', 'banana', 'apple',
'orange'];

const sale = fruits.filter(function(fruit){
return fruit === 'orange';
}).map(function(name){
    return `${name} is on sale`;
})

console.log(sale);