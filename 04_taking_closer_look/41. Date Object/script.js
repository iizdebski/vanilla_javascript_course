const months = ['January', 'February', 'March',
'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday'];

//let date = new Date();
let date = new Date('1/12/2004');

let month = date.getMonth();
let day = date.getDay();
//let seconds = date.getSeconds();

date.setDate(25);
date.setDate(2009);
date.setMonth(4);

//console.log(date);
//console.log(month);
//console.log(day);
//console.log(seconds);

console.log(`Month is : ${months[month]} and the date is : ${days[day]}`);
console.log(date);