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
