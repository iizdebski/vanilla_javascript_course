// getAttribute();
// setAttribute();

const special = document.querySelector('#special');

const showClass = special.getAttribute('class');
//console.log(showClass);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
//console.log(showLink);

const item = link.nextSibling.nextSibling;
item.setAttribute('class', 'first');
console.log(item);

const links = document.querySelectorAll('.first');
console.log(links);