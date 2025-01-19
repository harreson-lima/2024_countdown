const NEW_YEAR = new Date("Jan 1, 2026 00:00:00").getTime();

const dayEle = document.querySelector("#day");
const hourEle = document.querySelector("#hour");
const minuteEle = document.querySelector("#minute");
const secondEle = document.querySelector("#second");

const secondsRef = 1000;
const minutesRef = secondsRef * 60;
const hoursRef = minutesRef * 60;
const daysRef = hoursRef * 24;

const counterInterval = setInterval(newYear, 1000);

function newYear() {
  const currentDate = new Date().getTime();
  const difference = NEW_YEAR - currentDate;

  if (difference <= 0) {
    happyNewYear();
    clearInterval(counterInterval);
  }

  const d = Math.floor(difference / daysRef).toString();
  const h = Math.floor((difference % daysRef) / hoursRef).toString();
  const m = Math.floor((difference % hoursRef) / minutesRef).toString();
  const s = Math.floor((difference % minutesRef) / secondsRef).toString();

  dayEle.innerHTML = d.padStart(2, "0");
  hourEle.innerHTML = h.padStart(2, "0");
  minuteEle.innerHTML = m.padStart(2, "0");
  secondEle.innerHTML = s.padStart(2, "0");
}

function happyNewYear() {
  const containerEle = document.querySelector(".container");
  containerEle.style.display = "none";

  const messageEle = document.querySelector(".message");
  messageEle.style.display = "block";

  firework();
}

function firework() {
  const duration = 30 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 100,
    zIndex: 0,
    // colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
