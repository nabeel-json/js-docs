const sun = document.querySelector(".sun-svg");
const moon = document.querySelector(".moon-svg");

function makeLightMode() {
  document.body.classList.add("light-mode");
  sun.style.display = "flex";
  moon.style.display = "none";
}

function makeDarkMode() {
  document.body.classList.remove("light-mode");
  sun.style.display = "none";
  moon.style.display = "flex";
}
