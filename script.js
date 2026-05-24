const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){

revealElements.forEach((element) => {

```
const windowHeight = window.innerHeight;

const elementTop =
element.getBoundingClientRect().top;

const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){
  element.classList.add("active");
}
```

});

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* NAVBAR SCROLL EFFECT */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}

});

const menuToggle =
document.getElementById("menuToggle");

const mobileMenu =
document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});

const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 900);
});
const bookingBtn = document.querySelector(".booking-btn");

bookingBtn.addEventListener("click", () => {
  alert("Terima kasih! Fitur pencarian kamar sedang diproses.");
});
/* ACTIVE NAV LINK */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
    section.offsetTop;

    if(window.scrollY >= sectionTop - 120){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }

  });

});

/* BACK TO TOP */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 400){
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
/* CUSTOM CURSOR */

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";

});

/* HOVER */

const hoverItems =
document.querySelectorAll(
"a, button, .room-card, .facility-card"
);

hoverItems.forEach((item) => {

  item.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });

});