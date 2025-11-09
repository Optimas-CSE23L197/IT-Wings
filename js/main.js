let humbergerBtn = document.querySelector("#humberger i");
let navMenu = document.querySelector(".nav-menu");
let navIcon = document.querySelector(".fa-bars");
humbergerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
  humbergerBtn.classList.toggle("active");

  if (humbergerBtn.classList.contains("active")) {
    humbergerBtn.classList.replace("fa-bars", "fa-xmark");
  } else {
    humbergerBtn.classList.replace("fa-xmark", "fa-bars");
  }
});
