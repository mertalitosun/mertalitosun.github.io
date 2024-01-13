const touchIcon = document.getElementById("touchIcon");

setInterval(() => {
  if (touchIcon.style.display == "block") {
    touchIcon.style.display = "none";
  } else {
    touchIcon.style.display = "block";
  }
}, 1000);
