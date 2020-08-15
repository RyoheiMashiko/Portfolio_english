//Function of appearing overlapped nav when humburger icon clicked 
const navOverlay = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelector(".menu-btn-burger");
const closeButton = document.querySelector(".close");
const menuBtnBurgerTop = document.querySelector(".menu-btn-burger2");
const menuBtnBurgerBottom = document.querySelector(".menu-btn-burger3");
const  navHome= document.querySelector(".nav-home");
const  navAbout= document.querySelector(".nav-about");
const  navProject= document.querySelector(".nav-project");
const  navContact= document.querySelector(".nav-contact");
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

  let trigger = document.getElementById('Home');
  let triggerY= trigger.getBoundingClientRect().top;
  let trigger1 = document.getElementById('About');
  let triggerY1= trigger1.getBoundingClientRect().top;
  let trigger2 = document.getElementById('Myproject');
  let triggerY2= trigger2.getBoundingClientRect().top;
  let trigger3 = document.getElementById('Contact');
  let triggerY3= trigger3.getBoundingClientRect().top;


  console.log("triggerY");
  console.log(triggerY);
  console.log("triggerY1");
  console.log(triggerY1);
  console.log("triggerY2");
  console.log(triggerY2);
  console.log("triggerY3");
  console.log(triggerY3);

 if ( triggerY1 <= 15) {
  menuBtnBurgerTop.classList.add("bg-black");
  menuBtnBurger.classList.add("bg-black");
  menuBtnBurgerBottom.classList.add("bg-black");
 } else if (triggerY1 <= 16 ) {
  menuBtnBurgerTop.classList.add("bg-black");
 } else if ( triggerY1 <= 26) {
  menuBtnBurger.classList.add("bg-black");
  menuBtnBurgerTop.classList.remove("bg-black");
 } else if (triggerY1 <= 35) {
  menuBtnBurgerBottom.classList.add("bg-black");
  menuBtnBurger.classList.remove("bg-black");
 } else if ( triggerY1 >= 36 ) {
  menuBtnBurger.classList.remove("bg-black");
  menuBtnBurgerTop.classList.remove("bg-black");
  menuBtnBurgerBottom.classList.remove("bg-black");
}

 if ( triggerY <= 0 && triggerY1 >= 0 ) {
  navHome.classList.add("bolder");
  navAbout.classList.remove("bolder");
  navProject.classList.remove("bolder");
  navContact.classList.remove("bolder");
 } else if ( triggerY1 <= 0 && triggerY2 >= 0 ) {
  navAbout.classList.add("bolder");
  navHome.classList.remove("bolder");
  navProject.classList.remove("bolder");
  navContact.classList.remove("bolder");
 } else if ( triggerY2 <= 0 && triggerY3 >= 0 ) {
  navProject.classList.add("bolder"); 
  navAbout.classList.remove("bolder");
  navHome.classList.remove("bolder");
  navContact.classList.remove("bolder");
 }

}
window.addEventListener('scroll', Color);

window.onscroll = function() {
 // const  navContact= document.querySelector(".nav-contact");
 if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
   navContact.classList.add("bolder");  
   navAbout.classList.remove("bolder");
   navHome.classList.remove("bolder");
   navProject.classList.remove("bolder");
 }
};

