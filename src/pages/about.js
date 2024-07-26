import aboutImage from "../assets/about1.webp";

function aboutPage() {
  const title = document.createElement("h1");
  const main = document.getElementById("content");
  const p = document.createElement("p");
  main.innerHTML = "";
  p.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut quam vel arcu varius venenatis. In vel tortor at velit feugiat consequat. Sed non diam id arcu scelerisque volutpat vel ut nunc. Fusce sodales aliquam ultrices. Nam dignissim, risus at scelerisque viverra, erat ex placerat lorem, sit amet elementum nisi nisl ac ligula.";

  title.innerHTML = "About";

  main.style.backgroundImage = `url(${aboutImage})`;
  main.appendChild(title);
  main.appendChild(p);
}

export default aboutPage;
