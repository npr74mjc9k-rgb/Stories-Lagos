/* ==========================================
   STORIES LAGOS — CLEAN SCRIPT
========================================== */

// Wait until page loads
window.addEventListener("load", () => {

  // Hide loader after 2 seconds
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);

});

/* ==============================
   MOBILE MENU
============================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.querySelector(".close-menu");

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

// Close menu after clicking any mobile link
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

/* ==============================
   NAVBAR SCROLL
============================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ==============================
   COUNTER ANIMATION
============================== */

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters() {

  if (counterStarted) return;

  const stats = document.querySelector(".stats");

  if (stats.getBoundingClientRect().top < window.innerHeight - 100) {

    counterStarted = true;

    counters.forEach(counter => {

      const target = Number(counter.dataset.target);
      let value = 0;
      const speed = target / 80;

      const update = () => {
        value += speed;

        if (value < target) {
          counter.textContent = Math.floor(value);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };

      update();
    });
  }
}

window.addEventListener("scroll", runCounters);
runCounters();

/* ==============================
   SCROLL REVEAL
============================== */

const revealSections = document.querySelectorAll(
  ".experience,.stats,.menu,.events,.gallery,.reservation,.footer"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
    }
  });
}, {
  threshold: 0.15
});

revealSections.forEach(section => revealObserver.observe(section));

/* ==============================
   BOOKING POPUP
============================== */

const popup = document.querySelector(".booking-popup");
const popupOverlay = document.querySelector(".booking-overlay");

document.querySelectorAll(".reserve-btn-popup").forEach(btn => {

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("active");
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

});

function closePopup() {
  popup.classList.remove("active");
  popupOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.querySelector(".close-popup").addEventListener("click", closePopup);
popupOverlay.addEventListener("click", closePopup);

/* ==============================
   CURSOR GLOW (Desktop only)
============================== */

const glow = document.querySelector(".cursor-glow");

if (window.innerWidth > 900) {
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}