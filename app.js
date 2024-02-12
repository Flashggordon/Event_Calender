const calender = document.getElementById("calender");

const months = [ "January",
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
           "December" ];

           const days = ["Sunday",
            "Monday",
             "Tuesday",
              "Wednesday",
               "Thursday",
                "Friday", 
                "Saturday"];

                const today = new Date();
                let currentMonth = today.getMonth();
                let currentYear = today.getFullYear();

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
const monthWtihYear = `${year}  - ${month}`;
const daysInMonth = new Date(year, month + 1, 0).getDate();

let dayCounter = 1;
for (let i = 0; i < dayElements.length; i++) {
    const day = dayElements[i];
  
    const dayNumber = day.querySelector(".day-number");
    if (i >= theFirstDayOfWeek && dayCounter <= daysInMonth){
      dayNumber.innerText = dayCounter;  
      dayCounter++;
    }
}   
};

drawBlankCalender();
updateCalender(currentMonth, currentYear,);