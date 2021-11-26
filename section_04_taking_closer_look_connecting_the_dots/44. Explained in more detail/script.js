
let toDoList = [];

function addItem(arr){
    let answer = prompt("What would you like to do today?");
    let correct = answer.toLowerCase().trim();

    let index = arr.indexOf(correct);
    console.log(index);

    if(checkDuplicate(arr,correct)){
                 arr.push(answer);
             }else{
                 alert('Item wont be added to the list. Item already exists');
             }
         } 

 function checkDuplicate(arr, item){
          let isUnique = false;
          let index = arr.indexOf(item);//-1 or index
          if(index!=-1){
              isUnique = false;
          }
          else{
              isUnique = true;
          }
          return isUnique;
     }

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);

console.log(toDoList);