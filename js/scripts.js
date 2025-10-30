document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");
  const navMenu = document.getElementById("navSlider");
  const navOverlay = document.getElementById("navOverlay");

  menuOpen.addEventListener("click", function () {
    navMenu.classList.add("active");
    navOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  menuClose.addEventListener("click", function () {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
  document.addEventListener("click", function (event) {
    const isMenuButton =
      menuOpen.contains(event.target) || menuClose.contains(event.target);
    if (!navMenu.contains(event.target) && !isMenuButton) {
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
      navOverlay.classList.remove("active");
    }
  });

  // Handle Body Overflow On Resize
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      document.body.style.overflow = "auto";
      navMenu.classList.remove("active");
      navOverlay.classList.remove("active");
    }
  });

  // Change header style on scroll

  function updateHeader() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", function () {
    updateHeader();
  });

  // Initial check
  updateHeader();

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

  // Initialize Swiper only on home page
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html" ||
    window.location.pathname.endsWith("/")
  ) {
    // Check if Swiper is loaded
    if (typeof Swiper !== "undefined") {
      // Testimonials Swiper
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

      // Client Logo Swiper
      var clientSwiper = new Swiper(".clientSwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 0,
        },
        speed: 3000,
        freeMode: true,
        breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
    }
  }
});
