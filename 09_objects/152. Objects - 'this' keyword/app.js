// this

const john = {
    name: 'john',
    lastName:'anderson',
    fullName:function(){
        console.log(`Hello my full name is Susy Anderson ${this.name} ${this.lastName}`);

    }
};

john.fullName();
const bob = {
    name: 'bob',
    lastName:'jordan',
    fullName:function(){
        console.log(`Hello my full name is Susy Anderson ${this.name} ${this.lastName}`);    
    }
};

bob.fullName();
console.log(this);

// window.name = 'window';
// window.lastName = "cooper";

this.name = "window"

const fullName = function(){
console.log(`Hello my full name is ${this.name} ${this.lastName}`);
};

fullName();