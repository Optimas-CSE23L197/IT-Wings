// toggle humberger icon
let humbergerBtn = document.querySelector("#humberger i");
let navMenu = document.querySelector(".nav-menu");
console.log(navMenu);
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

const navService = document.querySelector("#nav-service");
const serviceSection = document.querySelector("#home-menu-service-setion");

const navContact = document.querySelector("#nav-contact");
const contactSection = document.querySelector("#contact-nav-section");

// Separate hide timers for each menu
let serviceTimeout, contactTimeout;

// Helper function to close all menus
function closeAllMenus() {
  serviceSection.classList.remove("active");
  contactSection.classList.remove("active");
}

/* -------------------------------
   SERVICE MENU EVENTS
-------------------------------- */
if (window.innerWidth > 992) {
  navService.addEventListener("mouseenter", () => {
    clearTimeout(serviceTimeout);
    closeAllMenus();
    serviceSection.classList.add("active");
  });

  navService.addEventListener("mouseleave", () => {
    serviceTimeout = setTimeout(() => {
      serviceSection.classList.remove("active");
    }, 200);
  });
}
// device width <= 992px
if (window.innerWidth <= 992) {
  closeAllMenus();
  navService.addEventListener("click", function () {
    serviceSection.classList.remove("active");
    window.location.href = "service1.html";
  });
}

serviceSection.addEventListener("mouseenter", () => {
  clearTimeout(serviceTimeout);
});

serviceSection.addEventListener("mouseleave", () => {
  serviceSection.classList.remove("active");
});

/* -------------------------------
   CONTACT MENU EVENTS
-------------------------------- */
navContact.addEventListener("mouseenter", () => {
  clearTimeout(contactTimeout);
  closeAllMenus();
  contactSection.classList.add("active");
});

navContact.addEventListener("mouseleave", () => {
  contactTimeout = setTimeout(() => {
    contactSection.classList.remove("active");
  }, 200);
});

contactSection.addEventListener("mouseenter", () => {
  clearTimeout(contactTimeout);
});

contactSection.addEventListener("mouseleave", () => {
  contactSection.classList.remove("active");
});

/* -------------------------------
   OPTIONAL (Mobile Support)
-------------------------------- */
navService.addEventListener("click", (e) => {
  e.preventDefault();
  serviceSection.classList.toggle("active");
  contactSection.classList.remove("active");
});

navContact.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.classList.toggle("active");
  serviceSection.classList.remove("active");
});
