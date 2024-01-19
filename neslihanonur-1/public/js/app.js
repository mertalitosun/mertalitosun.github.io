const touchIcon = document.getElementById("touchIcon");
const openEvent = document.getElementById("openEvent");
const content = document.getElementById("content");
const footer = document.getElementById("footer");

openEvent.addEventListener("click", () => {
  index.style.display = "none";
  content.style.display = "block";
  footer.style.display = "block";
  audioButton.style.visibility = "visible";
});
setInterval(() => {
  if (touchIcon.style.display == "block") {
    touchIcon.style.display = "none";
  } else {
    touchIcon.style.display = "block";
  }
}, 1000);
