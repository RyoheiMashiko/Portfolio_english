//Function of appearing overlapped nav when humburger icon clicked 
const navOverlay = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelector(".menu-btn-burger");
const closeButton = document.querySelector(".close");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    menuBtn.classList.add("open");
    menuBtnBurger.classList.add("bg-white");
    navOverlay.classList.remove("invisible");
    navOverlay.classList.remove("fade-out");
    navOverlay.classList.add("fade-in");
    menuOpen= true;
  }else {
    // menuBtn.classList.remove("invisible");
    navOverlay.classList.add("fade-out");
    menuBtn.classList.remove("open");
    menuBtnBurger.classList.remove("bg-white");
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
function burgerColor() {
  
}
