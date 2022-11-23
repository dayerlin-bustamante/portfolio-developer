import myJson from "./projects.json" assert { type: "json" };

const projects = document.getElementById("box-projects");
let fragment = "";

myJson.forEach((project) => {
  fragment += `
    <div class="col">
      <div class="card h-100">
        <img src="${project.img}" class="card-img-top" alt="weather app project">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a class="btn" target="_blank"  href="${project.url}" role="button">Open</a>
        </div>
      </div>
    </div>
  `;
});

projects.innerHTML = fragment;

/* NAV MMOBILE */
const btnMob = document.querySelectorAll(".btn-mobile");

function activelink() {
  btnMob.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

btnMob.forEach((item) => item.addEventListener("click", activelink));

/* SCROLL UP */
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
