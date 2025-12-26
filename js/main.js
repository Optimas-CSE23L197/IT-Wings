// ===============================
// TOGGLE HAMBURGER ICON
// ===============================
const humbergerBtn = document.querySelector("#humberger i");
const navMenu = document.querySelector(".nav-menu");

humbergerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
  humbergerBtn.classList.toggle("active");

  if (humbergerBtn.classList.contains("active")) {
    humbergerBtn.classList.replace("fa-bars", "fa-xmark");
  } else {
    humbergerBtn.classList.replace("fa-xmark", "fa-bars");
  }
});

// ===============================
// NAV DROPDOWN HANDLING
// ====================s===========
const navService = document.querySelector("#nav-service");
const serviceSection = document.querySelector("#home-menu-service-setion");
const navContact = document.querySelector("#nav-contact");
const contactSection = document.querySelector("#contact-nav-section");

let serviceTimeout, contactTimeout;

function closeAllMenus() {
  serviceSection.classList.remove("active");
  contactSection.classList.remove("active");
}

function setupNavEvents() {
  // Remove any existing listeners (clean re-init)
  navService.replaceWith(navService.cloneNode(true));
  navContact.replaceWith(navContact.cloneNode(true));

  const newNavService = document.querySelector("#nav-service");
  const newNavContact = document.querySelector("#nav-contact");

  // Desktop (hover behavior)
  if (window.innerWidth > 992) {
    newNavService.addEventListener("mouseenter", () => {
      clearTimeout(serviceTimeout);
      closeAllMenus();
      serviceSection.classList.add("active");
    });

    newNavService.addEventListener("mouseleave", () => {
      serviceTimeout = setTimeout(() => {
        serviceSection.classList.remove("active");
      }, 200);
    });

    serviceSection.addEventListener("mouseenter", () => {
      clearTimeout(serviceTimeout);
    });
    serviceSection.addEventListener("mouseleave", () => {
      serviceSection.classList.remove("active");
    });

    newNavContact.addEventListener("mouseenter", () => {
      clearTimeout(contactTimeout);
      closeAllMenus();
      contactSection.classList.add("active");
    });

    newNavContact.addEventListener("mouseleave", () => {
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
  }

  // Mobile (click behavior)
  else {
    newNavService.addEventListener("click", (e) => {
      window.location.href = "service.html";
    });

    newNavContact.addEventListener("click", (e) => {
      window.location.href = "contact.html";
    });
  }
}

// Initialize & reapply on resize
setupNavEvents();
window.addEventListener("resize", setupNavEvents);

// sticky navbar
let navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});

// top up button
let btn = document.getElementById("scrollBtn");
window.addEventListener("scroll", function () {
  // page scroll
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  // display height
  let windowHeight = window.innerHeight;
  // total document height
  let docHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= docHeight - 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth", // ✅ smooth animation
  });
});

// trigger message icon
const trigger = document.querySelector(".contact-trigger");
const popup = document.querySelector(".contact-popup");

trigger.addEventListener("click", () => {
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
});

// floating icon
let floatingIcon = document.querySelector(".contact-trigger");

window.addEventListener("scroll", () => {
  let scrollDown = window.scrollY || document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let docHeight = document.documentElement.scrollHeight;

  if (window.innerWidth > 480) {
    if (scrollDown + windowHeight >= docHeight - 90) {
      floatingIcon.style.bottom = "140px";
      popup.style.bottom = "220px";
    } else {
      floatingIcon.style.bottom = "";
      popup.style.bottom = "";
    }
  } else {
    if (scrollDown + windowHeight >= docHeight - 200) {
      floatingIcon.style.bottom = "200px";
      popup.style.bottom = "280px";
    } else {
      floatingIcon.style.bottom = "";
      popup.style.bottom = "";
    }
  }
});
