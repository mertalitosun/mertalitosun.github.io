const loadingPage = document.getElementById("loadingPage");
const index = document.getElementById("index");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    loadingPage.style.display = "none";
    index.style.display = "block";
  }, 2000);
});
