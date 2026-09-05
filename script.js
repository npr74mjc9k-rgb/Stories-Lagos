/* =========================================
   STORIES LAGOS V3 — CLIENT EDITION
   COMPLETE SCRIPT
========================================= */

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   PREMIUM LOADER
========================= */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1800);
});

/* =========================
   SCROLL REVEAL
========================= */
const revealItems = document.querySelectorAll(
  ".experience,.stats,.menu,.events,.gallery,.reservation,.footer"
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

revealItems.forEach((item) => revealObserver.observe(item));

/* =========================
   ANIMATED COUNTERS
========================= */
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);
      let current = 0;

      const increment = target / 100;

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        counter.textContent = Math.floor(current).toLocaleString();
      }, 20);

      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

/* =========================
   LUXURY MOBILE MENU
========================= */
const menuBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenuBtn?.addEventListener("click", closeMobileMenu);
menuOverlay?.addEventListener("click", closeMobileMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

/* =========================
   RESERVATION POPUP
========================= */
const bookingPopup = document.querySelector(".booking-popup");
const bookingOverlay = document.querySelector(".booking-overlay");
const reserveButtons = document.querySelectorAll(".reserve-btn-popup");
const popupClose = document.querySelector(".close-popup");

reserveButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    bookingPopup.classList.add("active");
    bookingOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closePopup() {
  bookingPopup.classList.remove("active");
  bookingOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

popupClose?.addEventListener("click", closePopup);
bookingOverlay?.addEventListener("click", closePopup);

/* =========================
   GOLD CURSOR GLOW
========================= */
const glow = document.querySelector(".cursor-glow");

if (window.innerWidth > 900) {
  window.addEventListener("pointermove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
} else {
  window.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];

    glow.style.opacity = "1";
    glow.style.left = `${touch.clientX}px`;
    glow.style.top = `${touch.clientY}px`;
  });

  window.addEventListener("touchend", () => {
    glow.style.opacity = "0";
  });
}

/* =========================
   HERO PARALLAX
========================= */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const offset = window.scrollY;

  if (hero) {
    hero.style.backgroundPositionY = `${offset * 0.35}px`;
  }
});

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});