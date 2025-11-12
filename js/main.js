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
// ===============================
const navService = document.querySelector("#nav-service");
const serviceSection = document.querySelector("#home-menu-service-setion");
const navContact = document.querySelector("#nav-contact");
const contactSection = document.querySelector("#contact-nav-section");

let serviceTimeout, contactTimeout;

// Helper: close all open menus
function closeAllMenus() {
  serviceSection.classList.remove("active");
  contactSection.classList.remove("active");
}

// Apply correct event listeners based on screen size
function setupNavEvents() {
  // Clean previous listeners
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
    closeAllMenus();

    newNavService.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = serviceSection.classList.contains("active");
      closeAllMenus();

      if (isActive) {
        serviceSection.classList.remove("active");
      } else {
        serviceSection.classList.add("active");
      }
    });

    newNavContact.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = contactSection.classList.contains("active");
      closeAllMenus();

      if (isActive) {
        contactSection.classList.remove("active");
      } else {
        contactSection.classList.add("active");
      }
    });
  }
}

// Initialize and reapply on resize
setupNavEvents();
window.addEventListener("resize", setupNavEvents);

// ===============================
// JOB PAGE BUTTONS
// ===============================
document.querySelector(".apply")?.addEventListener("click", function () {
  alert("Application submitted!");
});

document.querySelector(".recommend")?.addEventListener("click", function () {
  alert("Share with your friend!");
});
