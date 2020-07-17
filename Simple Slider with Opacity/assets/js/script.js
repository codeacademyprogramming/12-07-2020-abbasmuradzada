let left = document.getElementById('left');
let right = document.getElementById('right');
let slider = document.querySelector('.slider');

right.addEventListener("click",function(){
    var active = document.querySelector('.active');
    active.classList.remove('active');
    if(active.nextElementSibling!=null){
        active.nextElementSibling.classList.add('active');  
    }else{
        active.parentElement.firstElementChild.classList.add('active');
    }
})

left.addEventListener("click",function(){
    var active = document.querySelector('.active');
    active.classList.remove("active");
    if(active.previousElementSibling!=null){
        active.previousElementSibling.classList.add('active');
    }else{
        active.parentElement.lastElementChild.classList.add('active');
    }
})

left.addEventListener("swiped-left",function(){
    var active = document.querySelector('.active');
    active.classList.remove("active");
    if(active.previousElementSibling!=null){
        active.previousElementSibling.classList.add('active');
    }else{
        active.parentElement.lastElementChild.classList.add('active');
    }
})

setInterval(function(){
    var active = document.querySelector('.active');
    active.classList.remove("active");
    if(active.nextElementSibling!=null){
        active.nextElementSibling.classList.add('active');
    }else{
        active.parentElement.firstElementChild.classList.add('active');
    }
},5000)



