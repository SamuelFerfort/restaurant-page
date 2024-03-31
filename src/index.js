import stylesheet from "./styles.css";
import menu from "./menu.js";
import about from "./about.js";
import image from "./restaurant.jpg";



const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

function homepage() {
  const title = document.createElement("h1");
  const main = document.getElementById("content");
  main.innerHTML = "";

  title.innerHTML = "Welcome To The Best Restaurant";

  main.appendChild(title);
}
homepage();

homeBtn.addEventListener("click", homepage);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about);
