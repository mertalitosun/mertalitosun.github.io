const audioButton = document.getElementById("audioButton");


// audio play/pause
audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
