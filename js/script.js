const allSlides = document.querySelectorAll("#slide");
const leftArrow = document.getElementById("previous");
const rightArrow = document.getElementById("next");
const processBox = document.querySelectorAll(".process-item");
const exec = document.querySelector(".exec");
const paws = document.querySelector(".paws");
const jacks = document.querySelector(".jacks");
const closeModal = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#modal-img");
const html = document.querySelector("html");
const body = document.querySelector("body");

let i = 0;

showSlide();

function showSlide() {
  let element = document.querySelectorAll("#slide")[i];
  element.classList.remove("hidden-slide");
  element.classList.add("main-slide");
}

function hideSlide() {
  let element = document.querySelectorAll("#slide")[i];
  element.classList.remove("main-slide");
  element.classList.add("hidden-slide");
}

// Event Listeners
leftArrow.addEventListener("click", () => {
  if (i === 0) {
    hideSlide();
    i = allSlides.length - 1;
    showSlide();
  } else {
    hideSlide();
    i--;
    showSlide();
  }
});

rightArrow.addEventListener("click", () => {
  if (i === allSlides.length - 1) {
    hideSlide();
    i = 0;
    showSlide();
  } else {
    hideSlide();
    i++;
    showSlide();
  }
});

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

exec.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = "./img/Executive_Cars_Full.png";
  html.classList.add("scroll");
  body.classList.add("scroll");
});

paws.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = "./img/Happy_Paws_Full.png";
  html.classList.add("scroll");
  body.classList.add("scroll");
});

jacks.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = "./img/Band_Website_Full.png";
  html.classList.add("scroll");
  body.classList.add("scroll");
});

// document.documentElement.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// When the modal is shown, we want a fixed body
// When the modal is hidden, we want to remain at the top of the scroll position

//GSAP
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
const tl = new gsap.timeline();

tl.from(".line-1", {
  y: -75,
  opacity: 0,
  duration: 1.25,
  ease: "power2",
})

  .from(
    ".line-2",
    {
      y: -75,
      opacity: 0,
      duration: 1.25,
      ease: "power2",
    },
    "=-.75"
  )

  .from(
    ".hero-sub-title",
    {
      y: -75,
      opacity: 0,
      duration: 1.25,
      ease: "back",
    },
    "=-.75"
  );

gsap.from(".about-line", {
  scrollTrigger: {
    trigger: ".h3-lg",
    start: "top 700",
    // toggleActions: "play none none reset",
  },
  y: 300,
  duration: 1.5,
  ease: "power1",
});

gsap.from(".h3-lg", {
  scrollTrigger: {
    trigger: ".h3-lg",
    start: "top 700",
    // toggleActions: "play none none reset",
  },
  x: 400,
  duration: 1.5,
  ease: "power1",
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".h3-lg",
    start: "top 700",
    // toggleActions: "play none none reset",
  },
  x: -400,
  duration: 1.5,
  ease: "power1",
});

// If screen greater than 1150

// processAnimation();
// window.addEventListener("resize", processAnimation);

// function processAnimation() {
//   if (window.innerWidth < 1300) {
//     gsap.to(".process-item:nth-child(even)", {
//       scrollTrigger: {
//         trigger: ".process-section",
//         // start: "top 400",
//       },
//       y: 0,
//       duration: 0,
//     });

//     gsap.to(".process-item:nth-child(odd)", {
//       scrollTrigger: {
//         trigger: ".process-section",
//         // start: "top 400",
//       },
//       y: 0,
//       duration: 0,
//     });
//   } else {
//     gsap.to(".process-item:nth-child(even)", {
//       scrollTrigger: {
//         trigger: ".process-section",
//         start: "top 400",
//       },
//       y: 70,
//       duration: 0.9,
//       ease: "power1",
//     });

//     gsap.to(".process-item:nth-child(odd)", {
//       scrollTrigger: {
//         trigger: ".process-section",
//         start: "top 400",
//       },
//       y: -70,
//       duration: 0.9,
//       ease: "power1",
//     });
//   }
// }
