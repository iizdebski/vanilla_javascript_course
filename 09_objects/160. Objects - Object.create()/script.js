/*
Object.create
 */

const personProto = {
    greet: function(){
        console.log(`Hello there I'm ${this.name} ${this.lastName}`);
    }
};

const peter = Object.create(personProto);
peter.name = 'peter';
peter.lastName = 'conor';
console.log(peter);
peter.greet();

const sara = Object.create(personProto,{
    name:{value:'sara'},
    lastName:{value:'jordan'},
});

sara.greet();