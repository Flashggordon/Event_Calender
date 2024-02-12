const calender = document.getElementById("calender");
const monthEl = document.getElementById("month");
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const STORYBLOK_URL = "https://api.storyblok.com/v2/cdn/stories?starts_with=events&token=VV6PM7J4EQUJhTnFjQwzHAtt";


const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const loadEvents = async () => {
    const res = await fetch(STORYBLOK_URL);
    const { stories } = await res.json(); 
    const events = stories.reduce((accumulator, event) => {
        const eventTime = new Date(event.content.time);
        const eventDate = new Date(eventTime.toDateString());
        console.log(eventDate)
}, {});
};
loadEvents();

const drawBlankCalender = () => {
  for (let i = 0; i < 35; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    const dayText = document.createElement("p");
    dayText.classList.add("day-text");
    dayText.innerText = days[i % 7];

    const dayNumber = document.createElement("p");
    dayNumber.classList.add("day-number");

    const eventName = document.createElement("p");
    eventName.classList.add("event-name");

    day.appendChild(dayText);
    day.appendChild(dayNumber);
    day.appendChild(eventName);
    console.log(day);
    calender.appendChild(day);
  }
};
const updateCalender = (month, year, events) => {
  const dayElements = document.querySelectorAll(".day");

  const theFirst = new Date();
  theFirst.setMonth(month);
  theFirst.setFullYear(year);

  const theFirstDayOfWeek = theFirst.getDay();
  const monthName = months[month];
  const monthWtihYear = `${year}  - ${monthName}`;
  monthEl.innerText = monthWtihYear;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let dayCounter = 1;
  for (let i = 0; i < dayElements.length; i++) {
    const day = dayElements[i];

    const dayNumber = day.querySelector(".day-number");
    if (i >= theFirstDayOfWeek && dayCounter <= daysInMonth) {
      dayNumber.innerText = dayCounter;
      dayCounter++;
    } else {
      dayNumber.innerText = "";
    }
  }
};
const previousMonth= () => {
    if (currentMonth === 0) {
        currentMonth = 12;
        currentYear--;
    }
    updateCalender(--currentMonth , currentYear);
};

const nextMonth = () => {
    if (currentMonth === 11) {
        currentMonth = -1;
        currentYear++;
    }
    
    updateCalender(++currentMonth , currentYear);
};
 

drawBlankCalender();
updateCalender(currentMonth, currentYear);
