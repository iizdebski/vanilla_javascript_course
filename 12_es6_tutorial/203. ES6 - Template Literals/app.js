
// Template Literlas

const name = "Bob";
const lastName = "Sanders";
const age = 25;

// const phrase = 
// "My full name is " + name + " " + lastName + ". And I'm " + age + " ears old";

const phrase = `My full name is ${name} ${lastName}. And I'm ${age} years old`;
console.log(phrase);

const div = document.createElement("div");
//div.innerHTML = "<p>" + name + "</p>" + "<p>" + lastName + "</p>";

div.innerHTML = `
<h1>My name is: ${name}</h1>
<h3>My lastName is: ${lastName}</h3>
<h6>My age is: ${age}</h6>
<p>${phrase}</p>
`;

document.body.appendChild(div);