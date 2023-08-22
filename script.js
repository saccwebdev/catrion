// Handling Navbar for Mobile screens
document.querySelector(".mobileMenuBar").addEventListener("click", () => {
  document.querySelector("header nav").classList.toggle("showNav");
});

document.querySelector(".closeNavBar").addEventListener("click", () => {
  document.querySelector("nav").classList.remove("showNav");
});
