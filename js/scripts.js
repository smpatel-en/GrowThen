document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelectorAll("#menuBtn");
  const navMenu = document.getElementById("navSlider");

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
});
