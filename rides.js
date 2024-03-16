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

document.addEventListener("DOMContentLoaded", function () {
  const home = document.querySelector(".home");
  home.addEventListener("click", () => {
    window.location = `index.html`;
  });
});
