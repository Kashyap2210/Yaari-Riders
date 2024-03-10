let fileToBeOpened = document.querySelectorAll("li");

fileToBeOpened.forEach(function (file) {
  file.addEventListener("click", function () {
    listItemClicked = file.textContent.toLocaleLowerCase();
    window.location = `${listItemClicked}.html`;
  });
});
