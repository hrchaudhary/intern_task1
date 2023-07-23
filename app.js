const harmburgerBtn = document.querySelector(".nav-sm");
const smallMenu = document.querySelector(".menu");

harmburgerBtn.addEventListener("click", () => {
  smallMenu.classList.toggle("display");
});