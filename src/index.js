import stylesheet from "./styles.css";
import menu from "./pages/menu.js";
import about from "./pages/about.js";
import home from "./pages/home.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

home();

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about);
