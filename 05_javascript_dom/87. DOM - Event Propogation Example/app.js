

const container = document.querySelector('.container');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = `I'm sitting inside the container`;
    container.appendChild(h1);
})


container.addEventListener('click', function(event){

    if(event.target.classList.contains('heading')){
        event.target.addEventListener('click', function(){
            console.log("list item clicked");
        })
    }
})


// document.querySelectorAll('.heading').forEach(function(item){
//     item.addEventListener('click', function (){
//         console.log('you clicked me');
//     })
// })

// const item = document.querySelectorAll('.heading');
// console.log(item);