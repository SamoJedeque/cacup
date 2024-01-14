const navbar = document.getElementById('web-header');
 window.addEventListener('scroll',()=>{
    if (window.scrollY > 150) {
        navbar.classList.add('scrolled');
        navbar.querySelector(".paint").style.color="#0ca7e0";
        navbar.querySelector(".paint2").style.color="#0ca7e0";
        navbar.querySelector(".paint3").style.color="#0ca7e0";
    }else{
         navbar.classList.remove('scrolled');
         navbar.querySelector(".paint").style.color="#000"; 
        navbar.querySelector(".paint2").style.color="#000";
        navbar.querySelector(".paint3").style.color="#000";
    } 
 });