const navOverlay = document.getElementById("nav");
const humburger = document.querySelector(".humburger");
const closeButton = document.querySelector(".close");

humburger.addEventListener("click", () => {
  navOverlay.classList.remove("invisible");
  navOverlay.classList.remove("fade-out");
  navOverlay.classList.add("fade-in");
  humburger.classList.add("invisible");
} );

closeButton.addEventListener("click", () => {
  humburger.classList.remove("invisible");
  navOverlay.classList.add("fade-out");
  const delay= function() {navOverlay.classList.add("invisible")};
  setTimeout(delay,400);
  navOverlay.classList.remove("fade-in");
} );
