const body = document.querySelector(".body");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const header = document.querySelector(".navbar");
const about = document.querySelector(".about-me");
const hakkimda = document.getElementById("beceri");
const calculator = document.getElementById("calculator");
const timer = document.getElementById("timer");
const todo = document.getElementById("todo");
const offcanvas = document.querySelector(".offcanvas");
const button = document.querySelector(".switch-button");
const buttonclose = document.querySelector(".btn-close");

const mod = () =>{
    button.classList.toggle("switch-button-dark");
    body.classList.toggle("body-mod");
    header.classList.toggle("body-mod");
    header.classList.toggle("navbar-dark");
    header.classList.toggle("bg-light");

    about.classList.toggle("bg-light");
    about.classList.toggle("about-me-mod");

    hakkimda.classList.toggle("about-me-mod");
    hakkimda.classList.toggle("bg-light");

    calculator.classList.toggle("bg-body");
    calculator.classList.toggle("about-me-mod");

    timer.classList.toggle("bg-body");
    timer.classList.toggle("about-me-mod");
    
    todo.classList.toggle("bg-body");
    todo.classList.toggle("about-me-mod");
}
moon.addEventListener("click",()=>{
    sun.style.display="block";
    moon.style.display="none";
    buttonclose.classList.add("btn-close-white");
    offcanvas.classList.add("body-mod");
    mod();
})

sun.addEventListener("click",()=>{
    sun.style.display="none";
    moon.style.display="block";
    buttonclose.classList.remove("btn-close-white");
    offcanvas.classList.remove("body-mod");
    mod();
})



