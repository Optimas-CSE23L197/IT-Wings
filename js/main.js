// toggle humberger icon
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

// home page carousel
$(document).ready(function () {
  $(".banner-image-list").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
});

//banner-item-list career
$(document).ready(function () {
  $(".banner-item-list").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 1000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
});

// home work details carousel
$(document).ready(function () {
  $(".home-work-box-list").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 1000,
    animateIn: "fadeIn",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 3,
      },
    },
  });
});
