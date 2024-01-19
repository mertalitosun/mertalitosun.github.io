const audioButton = document.getElementById("audioButton");
const audio = document.getElementById("audio");

window.addEventListener("scroll",()=>{
    audio.play();
})
// audio play/pause
audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
