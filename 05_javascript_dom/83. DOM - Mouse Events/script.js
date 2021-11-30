

const item = document.getElementById('item');
const heading = document.getElementById('heading');

item.addEventListener('click', function(){
    console.log('you clicked');    
})
item.addEventListener('mouseup', function(){
    console.log('up');    
})
item.addEventListener('mousedown', function(){
    console.log('down');    
})

heading.addEventListener('mouseover', function(){
    heading.classList.add('special');
})

heading.addEventListener('mouseout', function(){
    heading.classList.remove('special');
})