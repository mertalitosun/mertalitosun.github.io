const loadingPage = document.getElementById("loadingPage");
const content = document.getElementById("content");
window.addEventListener("load", () => {
  setTimeout(function () {
    loadingPage.style.display = "none";
    content.style.display = "block";
  }, 1000);
});
