function menuPage() {
  const title = document.createElement("h1");
  const main = document.getElementById("content");
  main.innerHTML = "";
  title.innerHTML = "Welcome To The Menu Page";

  main.appendChild(title);
}

export default menuPage;
