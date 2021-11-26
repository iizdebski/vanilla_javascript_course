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

     // remove item function
     function removeItem(list){
         let answer = prompt('Which item you want to delete from the list');         
         let correct = answer.trim().toLowerCase();

         let index = list.indexOf(correct);
         if(!checkDuplicate(list,correct)){
            let removedItem = list.splice(index,1);
            console.log(removedItem);
            alert(`Your removed "${removedItem}" from your list `);
         }
         else{
             console.log('no such value exists');
         }
     }         

     

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
removeItem(toDoList);

console.log(toDoList);