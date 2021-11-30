
// keypress -- when key is pressed
// keydown -- when key is down
// keyup -- when key is released

const nameInput = document.getElementById('name');

// name.addEventListener('keypress', function(){
//     console.log('key was pressed');
// })

// name.addEventListener('keydown' , function(){
//     console.log('key is down');
// })

// name.addEventListener('keyup', function(){
//    console.log(name.value);
// })

nameInput.addEventListener('keyup', function(){
    console.log(nameInput.value);
});