const dropDown = document.querySelector('#dropDown');
const menu = document.querySelector('.menu');
const link = document.querySelectorAll('.menu-item')
const linkArray = [...link];

dropDown.addEventListener('click', ()=>{
     menu.classList.toggle('show--menu')
})

linkArray.forEach(item => {
    item.addEventListener('click', ()=>{
        menu.classList.toggle('show--menu')
    })
});


document.addEventListener("DOMContentLoaded", function () {
    document.body.style.zoom = "80%";
});
