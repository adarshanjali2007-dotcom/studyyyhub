const menuButton=document.getElementById("menu-button");
const navMenu=document.getElementById("nav-menu");
const navLinks=document.querySelectorAll("#nav-menu a");

menuButton.addEventListener("click",()=>{
    navMenu.classList.toggle("hidden");
});

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        navMenu.classList.add("hidden");
    });
});
