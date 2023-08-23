let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
let slides = document.querySelectorAll('.projects .slides-container .slide');
let index = 0;
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
let alertshow = false;
setInterval(() =>{
    document.title = alertshow ? "Nandu | Portfolio" : "Follow for More!";
    alertshow = !alertshow;
},2000);
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
    if (window.scrollY > 150) {
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}