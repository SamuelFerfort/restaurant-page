function aboutPage() {
    const title = document.createElement("h1");
    const main = document.getElementById("content");
    main.innerHTML = "";
  
    title.innerHTML = "Welcome To The About Restaurant";
  
    main.appendChild(title);
   
  }

  export default aboutPage;