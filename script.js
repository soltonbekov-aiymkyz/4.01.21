
 
 let btnAdd = document.querySelector('#add');
  
 let btnSubstrack = document.querySelector('#substrack');
 
 let input = document.querySelector('input');
 
 btnAdd.addEventListener('click',   ()=>{
input.value = parseInt(input.value) + 1;
 })

 btnSubstrack.addEventListener('click',   ()=>{
    input.value = parseInt(input.value) - 1; 
})