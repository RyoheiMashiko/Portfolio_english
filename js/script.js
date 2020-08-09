const dropDown = document.getElementById("dropdown");
const humburger = document.querySelector(".humburger");

console.log(humburger);

humburger.addEventListener("click", () => {
  if( dropDown.style.display === "block") {
    dropDown.style.transition = "all 2s ease-in-out";
    dropDown.style.display = "none";
  }else{
    dropDown.style.display = "block";
  }
} );