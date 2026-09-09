// LOADER
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1800);
});

// MOBILE MENU
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".mobile-menu a");

function openMenu() {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMobileMenu);
menuOverlay.addEventListener("click", closeMobileMenu);

menuLinks.forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

// NAVBAR SCROLL EFFECT
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});