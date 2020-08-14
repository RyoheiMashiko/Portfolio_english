const navOverlay = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".close");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    menuBtn.classList.add("open");
    navOverlay.classList.remove("invisible");
    navOverlay.classList.remove("fade-out");
    navOverlay.classList.add("fade-in");
    menuOpen= true;
  }else {
    menuBtn.classList.remove("invisible");
    navOverlay.classList.add("fade-out");
    menuBtn.classList.remove("open");
    menuOpen= false;
    const delay= function() {navOverlay.classList.add("invisible")};
    setTimeout(delay,400);
    navOverlay.classList.remove("fade-in");
  }
});

// menuBtn.addEventListener("click", () => {
//   navOverlay.classList.remove("invisible");
//   navOverlay.classList.remove("fade-out");
//   navOverlay.classList.add("fade-in");
//   menuBtn.classList.add("invisible");
// } );

// closeButton.addEventListener("click", () => {
//   menuBtn.classList.remove("invisible");
//   navOverlay.classList.add("fade-out");
//   const delay= function() {navOverlay.classList.add("invisible")};
//   setTimeout(delay,400);
//   navOverlay.classList.remove("fade-in");
// } );
