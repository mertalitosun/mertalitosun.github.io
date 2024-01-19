const animate = document.querySelectorAll(".animate");

document.addEventListener("scroll", () => {
  const windowScrollY = window.scrollY;
  for (let i = 0; i < animate.length; i++) {
    if (windowScrollY > 300) {
      animate[0].style.opacity = 1;
    } else{
      animate[0].style.opacity = 0;
    }

    if(windowScrollY > 800){
      animate[1].style.opacity = 1;
    }else{
      animate[1].style.opacity = 0;
    }
    if(windowScrollY > 1200){
        animate[2].style.opacity = 1;
      }else{
        animate[2].style.opacity = 0;
      }
  }
});

