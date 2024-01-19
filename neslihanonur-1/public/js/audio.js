const audioButton = document.getElementById("audioButton");
const audio = document.getElementById("audio");
// audio play/pause
audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
