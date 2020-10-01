// gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
// const tl = new gsap.timeline();

const exec = document.querySelector(".exec");
const paws = document.querySelector(".paws");
const uics = document.querySelector(".uics");
const closeModal = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#modal-img");
const html = document.querySelector("html");
const body = document.querySelector("body");
const aboutSection = document.getElementById("about-section");
const processSection = document.getElementById("process-section");

// Modal

function execModal() {
  modal.style.display = "block";
  modalImg.src = "./img/Executive_Cars_Full.png";
  html.classList.add("scroll");
  body.classList.add("scroll");
}

function pawsModal() {
  modal.style.display = "block";
  modalImg.src = "./img/Happy_Paws_Full.png";
  html.classList.add("scroll");
  body.classList.add("scroll");
}

function uicsModal() {
  modal.style.display = "block";
  modalImg.src = "./img/UICS_Full.png";
  html.classList.add("scroll");
  body.classList.add("scroll");
}

exec.addEventListener("click", execModal);
paws.addEventListener("click", pawsModal);
uics.addEventListener("click", uicsModal);

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  html.classList.remove("scroll");
  body.classList.remove("scroll");
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
  html.classList.remove("scroll");
  body.classList.remove("scroll");
});

// GSAP Animations
// const aboutTitle = document.querySelector(".about-title");
// const aboutLine = document.querySelector(".about-line");
// const aboutContent = document.querySelector(".about-text");

// gsap.from(".about-line", {
//   scrollTrigger: {
//     trigger: ".about-title",
//     start: "top 700",
//   },
//   y: 300,
//   duration: 1.5,
//   ease: "power1",
// });

// gsap.from(".about-title", {
//   scrollTrigger: {
//     trigger: ".about-title",
//     start: "top 700",
//   },
//   x: 400,
//   duration: 1.5,
//   ease: "power1",
// });

// gsap.from(".about-text", {
//   scrollTrigger: {
//     trigger: ".about-title",
//     start: "top 700",
//   },
//   x: -400,
//   duration: 1.5,
//   ease: "power1",
// });
