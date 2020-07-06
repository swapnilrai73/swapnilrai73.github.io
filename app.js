function init() {
  //slides
  const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
    slide.addEventListener("click", function() {
      changeDots(this);
    });
  });

  function changeDots(dot) {
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  }

  
//menu
  const hamburger = document.querySelector(".menu");
  const hamburgerLines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const contact = document.querySelector(".contact");
  const project = document.querySelector(".projects");
  const skills = document.querySelector(".professional");
  const social = document.querySelector(".social");
  const logo = document.querySelector(".logo");

  const tl = new TimelineMax({ paused: true, reversed: true });

  tl.to(navOpen, 0.5, { y: 0 })
    .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.3")
    .fromTo(project, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.4")
    .fromTo(skills, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.3")
    .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.4")
    .fromTo(logo, 0.2, { color: "white" }, { color: "black" }, "-=1")
    .fromTo(
      hamburgerLines,
      0.2,
      { stroke: "white" },
      { stroke: "black" },
      "-=1"
    );

  hamburger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
}


init();
