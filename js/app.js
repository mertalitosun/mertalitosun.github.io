// body
const body = document.querySelector(".body");

// karanlık mod buton
const moon = document.querySelector(".moon");

// aydınlık mod buton
const sun = document.querySelector(".sun");

// header-navbar
const header = document.querySelector(".navbar");

// hakkımda
const about = document.querySelector(".about-me");

// beceri
const hakkimda = document.getElementById("beceri");

// hesap makinesi card
const calculator = document.getElementById("calculator");

// timer card
const timer = document.getElementById("timer");

// todo list card
const todo = document.getElementById("todo");

// not hesaplama card
const not = document.getElementById("not");

// offcanvas
const offcanvas = document.querySelector(".offcanvas");

// mod değiştirme div
const button = document.querySelector(".switch-button");

// offcanvas close buton
const buttonclose = document.querySelector(".btn-close");


const card = document.querySelectorAll(".card");

const mod = () =>{
    // mod değiştirme div
    button.classList.toggle("switch-button-dark");

    // body
    body.classList.toggle("body-mod");

    // header-navbar mod değişim
    header.classList.toggle("body-mod");
    header.classList.toggle("navbar-dark");
    header.classList.toggle("bg-light");

    // hakkımda mod değişim
    about.classList.toggle("bg-light");
    about.classList.toggle("about-me-mod");

    // beceri mod değişim
    hakkimda.classList.toggle("about-me-mod");
    hakkimda.classList.toggle("bg-light");

    // calculator.classList.toggle("bg-body");
    // calculator.classList.toggle("about-me-mod");

    // timer.classList.toggle("bg-body");
    // timer.classList.toggle("about-me-mod");
    
    // todo.classList.toggle("bg-body");
    // todo.classList.toggle("about-me-mod");

    for(var i = 0; i < card.length; i++){
        card[i].classList.toggle("bg-body");
        card[i].classList.toggle("about-me-mod");
    }

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



