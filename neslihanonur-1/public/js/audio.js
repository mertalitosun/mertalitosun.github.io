const audio = document.getElementById("audio");
const audioButton = document.getElementById("audioButton");
const audioButtonContent = document.getElementById("audioButtonContent");
document.addEventListener("DOMContentLoaded", () => {
  openEvent.addEventListener("click", () => {
    audioButtonContent.innerHTML="volume_off"
    audioButtonContent.style="color:red;"
    audio.play();
  });
});

// audio play/pause
audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audioButtonContent.innerHTML="volume_off"
    audioButtonContent.style="color:red;"
    audio.play();
  } else {
    audioButtonContent.innerHTML="volume_up"
    audioButtonContent.style="color:black;"
    audio.pause();
  }
});
