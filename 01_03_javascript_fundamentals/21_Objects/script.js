// OBJECTS IN JAVASCRIPT

let person = {
    name:"john",
    lastName:'pepper',
    age:25,
    education:false,
    wife:true,
    siblings:['sister', 'brether'],
    fullName:function(){
        console.log("And the full name of the person is: " + person.name + " "
         + person.lastName) 
    } 

}

let personName = person.name;
let personLastName = person['lastName'];

console.log(personName);
console.log(personLastName);

person.fullName();