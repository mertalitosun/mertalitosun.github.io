const animate = document.querySelectorAll(".animate");

document.addEventListener("scroll", () => {
  const windowScrollY = window.scrollY;
  for (let i = 0; i < animate.length; i++) {
    if (windowScrollY > 500) {
      animate[0].style.opacity = 1;
    } else{
      animate[0].style.opacity = 0;
    }

    if(windowScrollY > 1000){
      animate[1].style.opacity = 1;
    }else{
      animate[1].style.opacity = 0;
    }
    if(windowScrollY > 1400){
        animate[2].style.opacity = 1;
      }else{
        animate[2].style.opacity = 0;
      }
  }
});