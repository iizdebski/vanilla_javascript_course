// previous Sibling
// next Sibling
// return whitespace

const first = document.querySelector('.first');
console.log(first);

const second = first.nextSibling.nextSibling;
console.log(second);

const zero = first.previousSibling.previousSibling;

console.log(zero);