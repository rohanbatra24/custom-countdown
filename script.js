const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");
const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set date input minimum
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

//populate countdown/ complete UI
const updateDOM = (params) => {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    // populate countdown
    countdownElTitle.textContent = countdownTitle;
    timeElements[0].textContent = days;
    timeElements[1].textContent = hours;
    timeElements[2].textContent = minutes;
    timeElements[3].textContent = seconds;

    // hide input
    inputContainer.hidden = true;

    // show countdown
    countdownEl.hidden = false;
  }, second);
};

// take value from input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;

  // get number verison of current date, updateDOM
  countdownValue = new Date(countdownDate).getTime();
  updateDOM();
};

// reset all values
const reset = () => {
  // hide countdowns, show input
  countdownEl.hidden = true;
  inputContainer.hidden = false;

  //stop the countdown
  clearInterval(countdownActive);

  //reset values
  countdownTitle = "";
  countdownDate = "";
};

// event listener
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
