import menuImage from "./assets/menu.webp";

function menuPage() {
  const title = document.createElement("h1");
  const main = document.getElementById("content");

  main.innerHTML = "";
  main.style.backgroundImage = `url(${menuImage})`;

  const menuItem1 = document.createElement("p");
  menuItem1.innerHTML =
    "<strong>Item 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const menuItem2 = document.createElement("p");
  menuItem2.innerHTML =
    "<strong>Item 2:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const menuItem3 = document.createElement("p");
  menuItem3.innerHTML =
    "<strong>Item 3:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  title.innerHTML = "Our Menu";
  main.appendChild(title);
  main.appendChild(menuItem1);
  main.appendChild(menuItem2);
  main.appendChild(menuItem3);
}

export default menuPage;
