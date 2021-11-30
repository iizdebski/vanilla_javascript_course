
// Blue Print
// Factory Functions and Cursor Functions
// Factory Functions

// const john = {
//     name: "john",
//     lastName: "anderson",
//     fullName: function(){
//         console.log(`Hello my full name is ${this.name} ${this.lastName}
//         and I like JavaScript`);
//     }
// };

// const bob = {
//     name: "bob",
//     fullName: function(){
//         console.log(`Hello my full name is ${this.name} ${this.lastName}`);
//     }
// };

function createPerson(name,  lastName){
    return {
    name: name,
    lastName: lastName,
    fullName: function(){
    console.log(`Hello my full name is ${this.name} ${this.lastName}
    and I like JavaScript + React`
    );
     }
    };
}

const john = createPerson('john', 'anderson');
const bob = createPerson('bob', 'jordan');
const susy = createPerson('susy', 'cooper');

john.fullName();
bob.fullName();
susy.fullName();