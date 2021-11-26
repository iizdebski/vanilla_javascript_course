// event object
// event type
// event target
// event.preventDefaut();

//document.body.addEventListener('click',function(event){

document.getElementById('link').addEventListener('click', function(event){
    event.preventDefault();

    //console.log(event.type);
    console.log(event.target);

})