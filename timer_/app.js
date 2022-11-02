// start button
const play = document.querySelector(".play");
// pause button
const pause = document.querySelector(".pause");
// reset button
const reset = document.querySelector(".reset");
// second 
const sec = document.querySelector(".sec");
// minute
const min = document.querySelector(".min");
// hours
const hrs = document.querySelector(".hrs");
let second = 0;
let minute = 0;
let hours = 0;

const clock = document.querySelector(".clock");
const clockInterval = () =>{clock.classList.toggle("clock-hover");} 

// start stopwatch
play.addEventListener("click", ()=>{
    interval = setInterval(timer,1000);
    aa=setInterval(clockInterval,1000);
});

// pause stopwatch
pause.addEventListener("click", () =>{
    clearInterval(interval);
    clearInterval(aa);
    clock.classList.remove("clock-hover");
})

// reset stopwatch
reset.addEventListener("click", ()=>{
     second = 0;
     minute = 0;
     hours = 0;
    sec.innerHTML = "0" + second;
    min.innerHTML = "0" + minute;
    hrs.innerHTML = "0" + hours;
    clearInterval(interval);
    clearInterval(aa);
    clock.classList.remove("clock-hover");
})

// timer function
const timer = () =>{
    second++; 
    if(second<=9){
        sec.innerHTML = "0" + second;
   }
   if(second>9){
    sec.innerHTML = second;
   }
    if(second>59){
        minute++;
        min.innerHTML = "0" + minute;
        second = 0;
        sec.innerHTML = "0" + second;
    }
    if(minute>9){
        min.innerHTML = minute;
    }
    if(minute>59){
        minute = 0;
        min.innerHTML = "0" + minute;
        hours++;
        hrs.innerHTML = "0 " + hours;       
    }
    if(hours>9){
        hrs.innerHTML = hours;
    }
}