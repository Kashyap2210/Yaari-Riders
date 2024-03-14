let fileToBeOpened = document.querySelectorAll("li");

fileToBeOpened.forEach(function (file) {
  file.addEventListener("click", function () {
    listItemClicked = file.textContent.toLocaleLowerCase();
    window.location = `${listItemClicked}.html`;
  });
});

let instaRedirect = document.querySelector(".instagram");

instaRedirect.addEventListener("click", () => {
  window.open("https://www.instagram.com/yaari_riders/", "_blank");
});

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
