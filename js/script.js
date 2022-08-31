"use strict";
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
