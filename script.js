document.addEventListener("DOMContentLoaded", () => {
  const timer = document.getElementById("timer");
  const countdownTimer = document.getElementById("countdown-timer");
  const timeForm = document.getElementById("time-form");
  const timeFormClose = document.getElementById("time-form-close");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const minuteValue = document.getElementById("minute");
  const secondValue = document.getElementById("second");
  const startBtn = document.getElementById("start");
  let minute = 0;
  let second = 0;

  // showing the time form
  timer.addEventListener("click", () => {
    timeForm.style.display = "flex";
    timeFormClose.style.display = "block";
    timeFormClose.addEventListener("click", () => {
      timeForm.style.display = "none";
      timeFormClose.style.display = "none";
    });
  });

  // setting the time
  startBtn.addEventListener("click", () => {
    minute = minuteValue.value;
    second = secondValue.value;

    countdownTimer.innerText = `${minute}:${second}`;
    timeForm.style.display = "none";
    timeFormClose.style.display = "none";

    minuteValue.value = null;
    secondValue.value = null;
  });
  if (minute > 0 && second > 0) {
    playBtn.disabled = true;
  }

  let secondInterval;

  // playing or starting the countdown
  playBtn.addEventListener("click", () => {
    playBtn.disabled = true;
    secondInterval = setInterval(() => {
      if (second > 0) {
        const minuteInterval = setInterval(() => {
          if (second === 0) {
            clearInterval(minuteInterval);
            if (minute > 0) {
              minute--;
              second = 59;
            }
            countdownTimer.innerText = `${minute}:${second}`;
          }
        });
        second--;
        countdownTimer.innerText = `${minute}:${second}`;
      } else {
        clearInterval(secondInterval);
        countdownTimer.innerText = "00:00";
      }
    }, 1000);
  });

  // pausing the countdown
  pauseBtn.addEventListener("click", () => {
    playBtn.disabled = false;
    clearInterval(secondInterval);
  });
});
