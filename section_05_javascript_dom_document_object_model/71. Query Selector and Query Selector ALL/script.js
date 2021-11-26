

// Decide the effect we want to apply to the selection

// Write any CSS Selector

document.querySelector('css selector'); // selects single
document.querySelectorAll('css selector');// selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');

console.log(list);

list.forEach(function (item){
    console.log(item);
    item.style.color = 'yellow';
})