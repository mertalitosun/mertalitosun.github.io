const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const time = document.querySelector(".time");

const timers = document.querySelector(".timers");

function updateTime() {
  const now = new Date().getTime();
  console.log(now);

  // const endDate = new Date(2024, 1, 24, 20, 0, 0).getTime();
  const endDate = new Date(2024, 0, 19, 14, 40, 0).getTime();
  console.log(endDate);

  const remainingTime = endDate - now;
  console.log(remainingTime);

  if (remainingTime > 0) {
    const seconds = remainingTime / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    day.innerHTML = `${parseInt(days)}`;
    hour.innerHTML = `${parseInt(hours % 24)}`;
    min.innerHTML = `${parseInt(minutes % 60)}`;
    sec.innerHTML = `${parseInt(seconds % 60)}`;
    setTimeout(updateTime, 1000);
  } else {
    time.style.display = "none";
    timers.style.display = "block";
  }
}
updateTime();
