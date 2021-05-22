const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";

// set date input minimum
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// take value from input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
};

// event listener
countdownForm.addEventListener("submit", updateCountdown);
