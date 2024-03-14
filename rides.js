document.addEventListener("DOMContentLoaded", function () {
  const navigate = document.querySelectorAll(".nav-options");
  navigate.forEach((option) => {
    option.addEventListener("click", () => {
      const navTo = option.textContent.trim();
      const navToElement = document.getElementById(navTo);
      if (navToElement) {
        navToElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
