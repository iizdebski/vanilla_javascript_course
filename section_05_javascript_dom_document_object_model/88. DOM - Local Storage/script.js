

// Local Storage Session Storage

// localStorage.setItem('job', 'developer');
// sessionStorage.setItem ('job', 'developer');

// set items in Local Storage

localStorage.setItem('name', 'john');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const name = localStorage.getItem('name');
console.log(name);

// remove item
//localStorage.removeItem('name');

localStorage.clear();