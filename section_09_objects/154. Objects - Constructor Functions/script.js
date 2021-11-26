// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions

function Person(name, lastName){
this.name = name;
this.lastName = lastName;
this.fullName = function(){
    console.log(
        `Hello my full name is ${this.name} ${this.lastName} and I like Angular`
    );
}    
console.log(this);
}

const john = new Person('john', 'anderson');
const bob = new Person('bob', 'jordan');
const susy = new Person('susy', 'cooper');


john.fullName()
bob.fullName()
susy.fullName()


//console.log(john);

//console.log(window.name);

function createPerson(name, lastName){
    return{
        name: name,
        lastName: lastName,
        fullName: function(){
            console.log(
                `Hello my full name is ${this.name} ${this.lastName} and I like React`
            );
        }
    };
}