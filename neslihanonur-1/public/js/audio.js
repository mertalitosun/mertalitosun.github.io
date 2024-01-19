const audio = document.getElementById("audio");
const audioButton = document.getElementById("audioButton");

document.addEventListener("DOMContentLoaded", () => {
  openEvent.addEventListener("click", () => {
    audio.play();
  });
});

// audio play/pause
audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
