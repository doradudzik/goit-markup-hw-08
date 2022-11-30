const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__close-btn");
const openMenuBtn = document.querySelector(".menu__btn");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("is-hidden");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("is-hidden");
});
