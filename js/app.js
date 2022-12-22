const body = document.querySelector(".body");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const header = document.querySelector(".navbar");
const about = document.querySelector(".about-me");
const hakkimda = document.getElementById("beceri");
const calculator = document.getElementById("calculator");
const timer = document.getElementById("timer");
const offcanvas = document.querySelector(".offcanvas");

moon.addEventListener("click",()=>{
    sun.style.display="block";
    moon.style.display="none";
    body.classList.add("body-mod");
    header.classList.remove("bg-light");
    header.classList.add("body-mod", "navbar-dark");
    about.classList.remove("bg-light");
    about.classList.add("about-me-mod");
    hakkimda.classList.remove("bg-light");
    hakkimda.classList.add("about-me-mod");

    calculator.classList.remove("bg-body");
    calculator.classList.add("about-me-mod");
    timer.classList.remove("bg-body");
    timer.classList.add("about-me-mod");
    offcanvas.classList.add("body-mod");
})

sun.addEventListener("click",()=>{
    sun.style.display="none";
    moon.style.display="block";
    body.classList.remove("body-mod");
    header.classList.remove("body-mod", "navbar-dark");
    header.classList.add("bg-light");
    about.classList.remove("about-me-mod");
    about.classList.add("bg-light");
    hakkimda.classList.remove("about-me-mod");
    hakkimda.classList.add("bg-light");
    
    calculator.classList.remove("about-me-mod");
    calculator.classList.add("bg-body");
    timer.classList.remove("about-me-mod");
    timer.classList.add("bg-body");
    offcanvas.classList.remove("body-mod");
})



