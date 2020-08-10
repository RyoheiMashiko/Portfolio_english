const navOverlay = document.getElementById("nav");
const humburger = document.querySelector(".humburger");
const closeButton = document.querySelector(".close-button");

humburger.addEventListener("click", () => {
  navOverlay.classList.remove("invisible");
  navOverlay.classList.remove("fade-out");
  navOverlay.classList.add("fade-in");
  humburger.classList.add("invisible");
} );

closeButton.addEventListener("click", () => {
  navOverlay.classList.add("fade-out");
  humburger.classList.remove("invisible");
  const delay= function() {navOverlay.classList.add("invisible")};
  setTimeout(delay,800);
  navOverlay.classList.remove("fade-in");
} );
