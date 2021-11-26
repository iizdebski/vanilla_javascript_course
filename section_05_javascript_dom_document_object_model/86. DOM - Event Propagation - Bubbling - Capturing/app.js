


// event propogation - order the events are fired
// event bubling - clicked elements first than bubbles up - default
// event capturing - fires at root and fires until reaches target

// document.getElementById('container').addEventListener('click', function(){
// console.log|('you clicked on container');
// })
// document.getElementById('list').addEventListener('click', function(){
//     console.log('you clicked on unordered list');    
// })
// document.querySelectorAll('.list-item').forEach(function(item){
//     item.addEventListener('click', function(){
//         console.log('you clicked on list item');
//     })
// })

document.getElementById('container').addEventListener('click', function(){
    console.log('you clicked on container');
},true)
document.getElementById('list').addEventListener('click', function(){
    console.log('you clicked on unordered list');
},true)
document.querySelectorAll('.list-item').forEach(function(item){
    item.addEventListener('click', function(){
        console.log('you clicked on list item');
    })
},true)