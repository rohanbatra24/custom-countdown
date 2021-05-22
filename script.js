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

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set date input minimum
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

//populate countdown/ complete UI
const updateDOM = (params) => {
  const now = new Date().getTime();
  const distance = countdownValue - now;

  console.log(`distance`, distance);

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);

  const minutes = Math.floor((distance % hour) / minute);

  const seconds = Math.floor((distance % minute) / second);

  console.log(`day`, days, hours, minutes, seconds);
};

// take value from input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;

  // get number verison of current date, updateDOM
  countdownValue = new Date(countdownDate).getTime();

  console.log(countdownValue);
  updateDOM();
};

// event listener
countdownForm.addEventListener("submit", updateCountdown);
