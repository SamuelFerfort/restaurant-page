import image from "./restaurant.jpg";

function homepage() {
  const title = document.createElement("h1");
  const main = document.getElementById("content");
  main.innerHTML = "";
  main.style.backgroundImage = `url(${image})`;
  title.innerHTML = "Welcome To The Best Restaurant";

  main.appendChild(title);
}

export default homepage;
