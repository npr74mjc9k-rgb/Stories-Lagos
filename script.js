// ===== STORIES LAGOS LOADER FIX =====
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1500); // show loader for 1.5 seconds
  }
});