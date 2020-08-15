//Function of appearing overlapped nav when humburger icon clicked 
const navOverlay = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelector(".menu-btn-burger");
const closeButton = document.querySelector(".close");
const menuBtnBurgerTop = document.querySelector(".menu-btn-burger2");
const menuBtnBurgerBottom = document.querySelector(".menu-btn-burger3");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    menuBtn.classList.add("open");
    menuBtnBurger.classList.add("bg-white");
    menuBtnBurgerTop.classList.add("bg-white");
    menuBtnBurgerBottom.classList.add("bg-white");
    navOverlay.classList.remove("invisible");
    navOverlay.classList.remove("fade-out");
    navOverlay.classList.add("fade-in");
    menuOpen= true;
  }else {
    // menuBtn.classList.remove("invisible");
    navOverlay.classList.add("fade-out");
    menuBtn.classList.remove("open");
    menuBtnBurger.classList.remove("bg-white");
    menuBtnBurgerTop.classList.remove("bg-white");
    menuBtnBurgerBottom.classList.remove("bg-white");
    menuOpen= false;
    const delay= function() {navOverlay.classList.add("invisible")};
    setTimeout(delay,400);
    navOverlay.classList.remove("fade-in");
  }
});

const navText = document.querySelector(".nav-wrapper");

navText.addEventListener("click", () => {
  navOverlay.classList.add("fade-out");
  menuBtn.classList.remove("open");
  menuOpen= false;
  const delay= function() {navOverlay.classList.add("invisible")};
  setTimeout(delay,400);
  navOverlay.classList.remove("fade-in");
})

// Adding an animation of floating up each element
ScrollReveal().reveal(".scroll", {
  reset: true
});

//Changing color of hamburger menu icon by background-color
function Color() {

  let trigger = document.getElementById('About');
  let triggerY= trigger.getBoundingClientRect().top;
  console.log(triggerY);
 
 if ( triggerY <= 15) {
    menuBtnBurgerTop.classList.add("bg-black");
    menuBtnBurger.classList.add("bg-black");
    menuBtnBurgerBottom.classList.add("bg-black");
 } else if (triggerY <= 16 ) {
   menuBtnBurgerTop.classList.add("bg-black");
 } else if ( triggerY <= 26) {
   menuBtnBurger.classList.add("bg-black");
   menuBtnBurgerTop.classList.remove("bg-black");
 } else if (triggerY <= 35) {
  menuBtnBurgerBottom.classList.add("bg-black");
  menuBtnBurger.classList.remove("bg-black");
 } else if ( triggerY >= 36 ) {
  menuBtnBurger.classList.remove("bg-black");
  menuBtnBurgerTop.classList.remove("bg-black");
  menuBtnBurgerBottom.classList.remove("bg-black");
}

const  navHome= document.querySelector("nav-home");
const  navAbout= document.querySelector("nav-about");
const  navProject= document.querySelector("nav-project");
const  navContect= document.querySelector("nav-contact");

if ( triggerY )
} 

window.addEventListener('scroll', Color);
