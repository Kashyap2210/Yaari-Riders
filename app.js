let fileToBeOpened = document.querySelectorAll("li");

fileToBeOpened.forEach(function (file) {
  file.addEventListener("click", function () {
    listItemClicked = file.textContent.toLocaleLowerCase();
    window.location = `${listItemClicked}.html`;
  });
});

// Popup hover function starts

let instaRedirect = document.querySelector(".instagram");
const instaPopup = document.querySelector("#insta-pop-up");

instaRedirect.addEventListener("mouseover", () => {
  instaPopup.classList.add("show");
});

instaRedirect.addEventListener("mouseout", () => {
  instaPopup.classList.remove("show");
});

instaRedirect.addEventListener("click", () => {
  window.open("https://www.instagram.com/yaari_riders/", "_blank");
});

// Popup hover function ends

// Email hover function starts

const emailPopup = document.querySelector(".gmail");
const emailIdPopup = document.querySelector("#gmail-pop-up");

emailPopup.addEventListener("mouseover", () => {
  emailIdPopup.classList.add("show-email");
});

emailPopup.addEventListener("mouseout", () => {
  emailIdPopup.classList.remove("show-email");
});
// Email hover function ends

function copyEmail() {
  const email = document.querySelector(".for-copy").textContent;
  navigator.clipboard
    .writeText(email)
    .then(() => {
      const popup = document.getElementById("popup");
      const popupText = document.getElementById("myPopup");
      popupText.style.display = "block";
      setTimeout(() => {
        popupText.style.display = "none";
      }, 2000); // Hide popup after 2 seconds
      console.log("Email Copied");
    })
    .catch((error) => {
      console.error("Error while copying email.", error);
    });
}

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
