
// All objects in JavaScript have access to constructor property that returns 
// a constructor function that create it.
// built in constructor functions
// arrays and functions are in fact objects in JavaScript

function Person(name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.fullName = function(){
        console.log(
            `Hello my full name is ${this.name} ${this.lastName} and I like Angular`
        );
    };
    // console.log(this);    
}

const john = new Person("john", "sanders");
console.log(john.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function(){};
console.log(sayHi.constructor);

const susy = new john.constructor('susy', 'carpenter');

console.log(susy);
susy.fullName();