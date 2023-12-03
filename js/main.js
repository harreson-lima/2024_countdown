const NEW_YEAR = new Date("Jan 1, 2024 00:00:00").getTime();

const dayEle = document.querySelector("#day");
const hourEle = document.querySelector("#hour");
const minuteEle = document.querySelector("#minute");
const secondEle = document.querySelector("#second");

const secondsRef = 1000;
const minutesRef = secondsRef * 60;
const hoursRef = minutesRef * 60;
const daysRef = hoursRef * 24;

function newYear() {
  const currentDate = new Date().getTime();
  const difference = NEW_YEAR - currentDate;

  dayEle.innerHTML = Math.floor(difference / daysRef);
  hourEle.innerHTML = Math.floor((difference % daysRef) / hoursRef);
  minuteEle.innerHTML = Math.floor((difference % hoursRef) / minutesRef);
  secondEle.innerHTML = Math.floor((difference % minutesRef) / secondsRef);
}

setInterval(() => { newYear(); }, 1000);