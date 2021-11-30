
/*

All objects in javascript inherit from the prototype of an Object() 
instructor function. When we say objects we mean arrays and functions
because they are aslo objects

*/


function Student(name, lastName, role){
    this.name = name;
    this.lastName = lastName;
    this.role = role;
}

Student.prototype.school = "Crystal Grove High School";
Student.prototype.greet = function(){
    console.log()(
        `Hello I'm ${this.name} ${this.lastName}
        and I'm ${this.role} in the ${this.school
        }`
    );
};

const john = new Student("john", "conor", "student");

const list = [];
console.log(list.constructor);
console.log(Object.getPrototypeOf(list));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(list)));

// console.log(list);