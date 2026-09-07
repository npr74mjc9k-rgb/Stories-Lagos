/* =========================================
   STORIES LAGOS V4
   COMPLETE SCRIPT
========================================= */

/* ---------------- LOADER ---------------- */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1800);
});

/* ---------------- HEADER SCROLL ---------------- */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ---------------- CURSOR GLOW ---------------- */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (e) => {
  if (!glow) return;

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* ---------------- MOBILE MENU ---------------- */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenuBtn = document.querySelector(".close-menu");

function openMenu() {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/* ---------------- RESERVATION POPUP ---------------- */

const popup = document.querySelector(".booking-popup");
const popupOverlay = document.querySelector(".booking-overlay");
const popupClose = document.querySelector(".close-popup");

document.querySelectorAll(".reserve-btn-popup").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    popup.classList.add("active");
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function hidePopup() {
  popup.classList.remove("active");
  popupOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

popupClose.addEventListener("click", hidePopup);
popupOverlay.addEventListener("click", hidePopup);

/* ESC key closes popup */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hidePopup();
    closeMenu();
  }
});

/* ---------------- SMOOTH SCROLL ---------------- */

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth"
    });
  });
});

/* ---------------- SCROLL REVEAL ---------------- */

const revealSections = document.querySelectorAll(
  ".experience, .stats, .menu, .events, .gallery, .reservation, .footer"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
      }
    });
  },
  { threshold: 0.15 }
);

revealSections.forEach((section) => revealObserver.observe(section));

/* ---------------- COUNTER ANIMATION ---------------- */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);

      let current = 0;
      const increment = target / 80;

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        counter.textContent = Math.floor(current).toLocaleString();

      }, 25);

      counterObserver.unobserve(counter);

    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

/* ---------------- HERO PARALLAX ---------------- */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

  const offset = window.scrollY;

  if (heroImage) {
    heroImage.style.transform = \`scale(1.08) translateY(\${offset * 0.12}px)\`;
  }

});