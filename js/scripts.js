document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelectorAll("#menuBtn");
  const navMenu = document.getElementById("navSlider");

  // Toggle navigation menu
  menuToggle.forEach((btn) => {
    btn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  });
  document.addEventListener("click", function (event) {
    const isMenuButton = Array.from(menuToggle).some((btn) =>
      btn.contains(event.target),
    );
    if (!navMenu.contains(event.target) && !isMenuButton) {
      navMenu.classList.remove("active");
    }
  });

  // Change header style on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("nav");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // FAQs Accordion
  const faqItems = document.querySelectorAll(".faq");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
      disabledClass: "disabled",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});
