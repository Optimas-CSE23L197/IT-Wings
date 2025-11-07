// navbar toggle
const humberger = document.querySelector(".hamburger i");
let navMenu = document.querySelector(".nav-menu");

humberger.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
  if (navMenu.classList.contains("show-menu")) {
    humberger.classList.remove("fa-bars");
    humberger.classList.add("fa-xmark");
  } else {
    humberger.classList.remove("fa-xmark");
    humberger.classList.add("fa-bars");
  }
});

// service active navigation
let serviceNavigation = document.querySelectorAll(".show-service-list ul li a");

for (let i = 0; i < serviceNavigation.length; i++) {
  serviceNavigation[i].addEventListener("click", function (e) {
    e.preventDefault();

    // remove active from all
    for (let j = 0; j < serviceNavigation.length; j++) {
      serviceNavigation[j].classList.remove("active");
    }

    // add active to the clicked one
    this.classList.add("active");
  });
}

// service filter
let services = document.querySelectorAll(".service");
function filterService(category) {
  if (category === "all") {
    services.forEach(function (service) {
      service.style.display = "block";
    });
  } else {
    services.forEach(function (service) {
      service.style.display = "none";
    });
  }
  // to show paerticular service
  let selectedServiceCategory = document.querySelectorAll("." + category);
  selectedServiceCategory.forEach(function (service) {
    service.style.display = "block";
  });
}

// // service search
// let searchInput = document.querySelector(".service-search");
// let serviceCards = document.querySelectorAll(".service-card");
// console.log(serviceCards);

// searchInput.addEventListener("input", function () {
//   const searchItem = this.value.toLowerCase().trim();
//   console.log(searchItem);

//   serviceCards.forEach((card) => {
//     const title = card.querySelector("h3").textContent.toLowerCase();
//     const description = card.querySelector("p").textContent.toLowerCase();

//     if (title.includes(searchInput) || description.includes(searchInput)) {
//       card.parentElement.style.display = "";
//     } else {
//       card.parentElement.style.display = "none";
//     }
//   });
// });
