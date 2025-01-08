let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
function enterGame() {
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
}
function playGame() {
  section2.classList.add("hidden");
  section3.classList.remove("hidden");
}
function playAgainGame() {
  section3.classList.add("hidden");
  section2.classList.remove("hidden");
}
