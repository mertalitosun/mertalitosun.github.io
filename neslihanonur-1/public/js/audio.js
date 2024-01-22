const audio = document.getElementById("audio");

document.addEventListener("DOMContentLoaded", () => {
  openEvent.addEventListener("click", () => {
    audio.play();
  });
});
window.addEventListener("pagehide", () => {
  audio.pause();
});
