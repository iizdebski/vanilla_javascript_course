
// first parameter sets this value, rest - actual parameters

const greet = function(){
    console.log(`Hello my full name is ${this.name} ${this.lastName}`);    
};
// window.name = "john";
// window.lastName = "carter";
greet();

const person1 = {
    name: "arnold",
    lastName: "swartz",
    greet: function(){
        console.log(`Hello my full name is ${this.name} ${this.lastName}`);
    }
};
person1.greet();

const person2 = {
    name: "anna",
    lastName: "gerber"
};

greet.call(person2);
greet.call(person1);