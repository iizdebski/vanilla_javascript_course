// there are many methods
//MDN Web Docs  developer.mozilla.org
//there is no point of memorizing
//the best way to learn is to build using them

let toDoList = [];

// function addItem(arr,item){
//     arr.push(item);
// }

// addItem(toDoList, "walk the dog");
// addItem(toDoList, "make coffee");

// console.log(toDoList);

function addItem(arr){
    let answer = prompt("What would you like to do today?");
    arr.push(answer);
}

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
console.log(toDoList);