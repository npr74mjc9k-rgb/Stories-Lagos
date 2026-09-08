/* =========================================
   STORIES LAGOS V4
========================================= */

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1500);
});

// Navbar scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

function hideMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeMenu.addEventListener("click", hideMenu);
menuOverlay.addEventListener("click", hideMenu);

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", hideMenu);
});

// Booking Popup
const popup = document.querySelector(".booking-popup");
const popupOverlay = document.querySelector(".booking-overlay");
const popupClose = document.querySelector(".close-popup");

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
    document.body.style.overflow = "auto";
}

popupClose.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", closePopup);

// Scroll Reveal
const sections = document.querySelectorAll(
    ".experience,.stats,.menu,.events,.gallery,.reservation,.footer"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));