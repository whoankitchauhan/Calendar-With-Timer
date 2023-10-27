let calendarBody = document.getElementById("calendarBody");
let currentMonthElement = document.getElementById("currentMonth");
let prevMonthButton = document.getElementById("prevMonth");
let nextMonthButton = document.getElementById("nextMonth");
let timerElement = document.getElementById("timer");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function displayCalendar() {
  calendarBody.innerHTML = " ";
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  currentMonthElement.textContent = months[currentMonth] + " " + currentYear;

  let day = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (i === 0 && j < firstDayOfMonth) {
        cell.textContent = " ";
      } else if (day <= daysInMonth) {
        cell.textContent = day;
        if (
          currentDate.getDate() === day &&
          currentDate.getMonth() === currentMonth &&
          currentDate.getFullYear() === currentYear
        ) {
          cell.classList.add("today");
          day++;
        }
        day++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

function updateTimer() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTimer();

setInterval(updateTimer, 1000);

prevMonthButton.addEventListener("click", function () {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  displayCalendar();
});

nextMonthButton.addEventListener("click", function () {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  displayCalendar();
});

displayCalendar();
