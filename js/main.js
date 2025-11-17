// ===============================
// SAFE ELEMENT GETTER
// ===============================
const $ = (selector) => document.querySelector(selector);

// ===============================
// TOGGLE HAMBURGER ICON
// ===============================
const humbergerBtn = $("#humberger i");
const navMenu = $(".nav-menu");

if (humbergerBtn && navMenu) {
  humbergerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");
    humbergerBtn.classList.toggle("active");

    if (humbergerBtn.classList.contains("active")) {
      humbergerBtn.classList.replace("fa-bars", "fa-xmark");
    } else {
      humbergerBtn.classList.replace("fa-xmark", "fa-bars");
    }
  });
}

// ===============================
// NAV DROPDOWN HANDLING
// ===============================
const navService = $("#nav-service");
const serviceSection = $("#home-menu-service-setion");
const navContact = $("#nav-contact");
const contactSection = $("#contact-nav-section");

let serviceTimeout, contactTimeout;

function closeAllMenus() {
  if (serviceSection) serviceSection.classList.remove("active");
  if (contactSection) contactSection.classList.remove("active");
}

function setupNavEvents() {
  if (!navService || !navContact) return; // page does not contain nav

  // Clone nodes only if needed
  const newNavService = $("#nav-service");
  const newNavContact = $("#nav-contact");

  if (window.innerWidth > 992) {
    // DESKTOP
    newNavService.addEventListener("mouseenter", () => {
      closeAllMenus();
      if (serviceSection) serviceSection.classList.add("active");
    });

    newNavService.addEventListener("mouseleave", () => {
      serviceTimeout = setTimeout(() => {
        if (serviceSection) serviceSection.classList.remove("active");
      }, 200);
    });

    if (serviceSection) {
      serviceSection.addEventListener("mouseenter", () =>
        clearTimeout(serviceTimeout)
      );
      serviceSection.addEventListener("mouseleave", () =>
        serviceSection.classList.remove("active")
      );
    }

    newNavContact.addEventListener("mouseenter", () => {
      closeAllMenus();
      if (contactSection) contactSection.classList.add("active");
    });

    newNavContact.addEventListener("mouseleave", () => {
      contactTimeout = setTimeout(() => {
        if (contactSection) contactSection.classList.remove("active");
      }, 200);
    });

    if (contactSection) {
      contactSection.addEventListener("mouseenter", () =>
        clearTimeout(contactTimeout)
      );
      contactSection.addEventListener("mouseleave", () =>
        contactSection.classList.remove("active")
      );
    }
  } else {
    // MOBILE
    newNavService.addEventListener(
      "click",
      () => (window.location.href = "service.html")
    );
    newNavContact.addEventListener(
      "click",
      () => (window.location.href = "contact.html")
    );
  }
}

// Init safely
setupNavEvents();
window.addEventListener("resize", setupNavEvents);

// ===============================
// FILTER SERVICES
// ===============================
let services = document.querySelectorAll(".service-card");

function filterServices(category) {
  if (!services || services.length === 0) return;

  if (category === "all") {
    services.forEach((s) => (s.style.display = "block"));
  } else {
    services.forEach((s) => (s.style.display = "none"));
    document
      .querySelectorAll("." + category)
      .forEach((s) => (s.style.display = "block"));
  }
}

// ===============================
// STICKY NAVBAR
// ===============================
const navBar = $(".nav-bar");
if (navBar) {
  window.addEventListener("scroll", () => {
    navBar.classList.toggle("sticky", window.pageYOffset > 80);
  });
}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================
const scrollBtn = $("#scrollBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    scrollBtn.style.display =
      scrollTop + windowHeight >= docHeight - 100 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===============================
// FLOATING ICON POPUP
// ===============================
const trigger = $(".contact-trigger");
const popup = $(".contact-popup");

if (trigger && popup) {
  trigger.addEventListener("click", () => {
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  });
}
