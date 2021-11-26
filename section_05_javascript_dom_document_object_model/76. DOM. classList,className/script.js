
//className
//classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.querySelector('#third');

// get classname

const classname = first.className;

//console.log(classname);

second.className = 'colors';
second.className = 'text';

// class List

const classes = third.classList;

// add class
// third.classList.add('colors');
// third.classList.add('text');

third.classList.add('colors','text');

// remove

third.classList.remove('text');

let result = third.classList.contains('text');

if(result){
    console.log('this element does not have the class');

}
else{
    console.log('this element does not have the class');
}

console.log(classes);