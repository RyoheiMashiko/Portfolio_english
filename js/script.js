const navOverlay = document.getElementById("nav");
const humburger = document.querySelector(".humburger");
const closeButton = document.querySelector(".close");

humburger.addEventListener("click", () => {
  navOverlay.classList.remove("invisible");
} );

closeButton.addEventListener("click", () => {
  navOverlay.classList.add("invisible");
} );
