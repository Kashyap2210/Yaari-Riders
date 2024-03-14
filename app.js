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
