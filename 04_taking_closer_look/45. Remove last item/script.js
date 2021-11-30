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
          let exists = false;
          let index = arr.indexOf(item);//-1 or index
          if(index!=-1){
              exists = false;
          }
          else{
              exists = true;
          }
          return exists;
     }

     function removeItem(list){
         if(list.length>0){
            console.log(`You deleted "${list[list.length-1]}" from the list`);
            list.pop();             
         }
         else{
             console.log('List does not have any more items to delete');
         }      
    }

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
removeItem(toDoList);
removeItem(toDoList);
removeItem(toDoList);
removeItem(toDoList);
removeItem(toDoList);

console.log(toDoList);