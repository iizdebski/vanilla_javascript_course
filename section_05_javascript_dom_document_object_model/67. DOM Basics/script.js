
// similar to css

// Select the element or group of elements that we want to affect
// Decide the effect we want to apply to the selection

// many different ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = "red";

// assign to variable

const element = document.getElementById("element")// do something

document.querySelector('.element') // do something

const win = window;

console.log(win);

// return a node object or a node list, which is an arraylike object
const btn = document.getElementById('btn');
const name = btn.nodeName;

console.log(typeof btn);
console.log(name);