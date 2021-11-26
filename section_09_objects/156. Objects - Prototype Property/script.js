/*
Prototypal Inheritance Model
JavaScript uses prototypal Inheritance model. That means that every constructor
function/class has a property that is shared by every instance of the 
constructor/class. So any properties and methods of prototype can be accessed 
by every instance. Prototype property returns object.
*/ 

function Student(name, lastName, role){
    this.name = name;
    this.lastName = lastName;
    this.role = role;   
}

Student.prototype.school = "Chrystal Grove High School";
   Student.prototype.greet = function(){
   console.log(
   `Hello I'm ${this.name} ${this.lastName} 
    and I'm ${this.role} in the ${this.school
         }`
      );
    };

const john = new Student("john", "connor", "student");
const bob = new Student("bob", "jordan", "student");

console.log(john);
console.log(bob);
john.greet();
bob.greet();