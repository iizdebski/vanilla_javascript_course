// Object Basics

/*
Objects are collectoins of key value pairs.
proert values  can be strings, numbers, booleans, arrays and functions
however if the property value is function they are called methods
instead

*/

// object literal syntax

const person = {
    name:'bob',
    age: 26,
    married: true,
    children:['anna', 'peter'],
    greeting: function(){
        console.log("hello my name is Bob");
    },
    ['last-name']:"anderson"
};
console.log(person);

// dot notation

// console.log(person.name);

// const age = person.age;     

// console.log(age);

// const firstChild = person.children[0];
// console.log(firstChild);

// person.greeting();
// bracket notation

console.log(person["last-name"]);
console.log(person['name']);

// change property
person.married = false;
// add property
person.city = 'chicago';
// delete property
delete person.married;

console.log(person);