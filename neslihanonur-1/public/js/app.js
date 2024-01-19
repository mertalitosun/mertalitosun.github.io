const touchIcon = document.getElementById("touchIcon");
const audioButton = document.getElementById("audioButton");
const audio = document.getElementById("audio");


// audio play/pause
audioButton.addEventListener("click",()=>{
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
})


setInterval(() => {
  if (touchIcon.style.display == "block") {
    touchIcon.style.display = "none";
  } else {
    touchIcon.style.display = "block";
  }
}, 1000);
