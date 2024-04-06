import stylesheet from "./styles.css";
import menu from "./menu.js";
import about from "./about.js";
import home from "./home.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

home();

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about);
