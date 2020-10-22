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
const hamburgerMenu = document.querySelector(".hamburger-container");
const navMenu = document.querySelector(".nav-container");
const navLinksMenu = document.querySelector(".nav-links");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close-menu");

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

function menuToggle() {

  if(window.getComputedStyle(hamburger).display === "block") {
    hamburger.style.display = "none";
    close.style.display = "block";
    navMenu.classList.add("responsive");
    navLinksMenu.classList.add("responsive");

   } else {
     close.style.display ="none";
     hamburger.style.display = "block";
     navMenu.classList.remove("responsive");
     navLinksMenu.classList.remove("responsive");
   }

}

function menuClose() {
  navMenu.classList.remove("responsive");
  navLinksMenu.classList.remove("responsive");
  close.style.display ="none";
  hamburger.style.display = "block";
}



// Event listeners
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

hamburgerMenu.addEventListener("click", menuToggle);
navLinksMenu.addEventListener("click", menuClose);





