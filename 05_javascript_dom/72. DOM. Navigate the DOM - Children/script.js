// Select the element or group of elements that we want to affect

//childNodes - returns all childNodes including whitespace which is
// treated as a text-node
//children
//firstChild
//lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;

console.log(allChildren);

const children = result.children;

console.log(children[0]);

console.log(result.firstChild);
console.log(result.lastChild);