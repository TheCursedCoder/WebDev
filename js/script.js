const exec = document.querySelector(".exec");
const paws = document.querySelector(".paws");
const jacks = document.querySelector(".jacks");

const closeModal = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#modal-img");
const html = document.querySelector("html");
const body = document.querySelector("body");
const processBox = document.querySelectorAll(".process-item");

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

function jacksModal() {
  modal.style.display = "block";
  modalImg.src = "./img/Band_Website_Full.png";
  html.classList.add("scroll");
  body.classList.add("scroll");
}

exec.addEventListener("click", execModal);
paws.addEventListener("click", pawsModal);
jacks.addEventListener("click", jacksModal);

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
