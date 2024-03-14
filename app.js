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

const maidIdCopied = document.querySelector(".for-copy");

maidIdCopied.addEventListener("click", async () => {
  const maidIdCopy = maidIdCopied.innerHTML;
  try {
    await navigator.clipboard.writeText(maidIdCopy);
    console.log("Text Copied");
  } catch (error) {
    console.log("Error while copying text.", error);
  }
});
