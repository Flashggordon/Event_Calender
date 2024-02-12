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

const drawBlankCalender = () => {
  for (let i = 0; i < 35; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    const dayText = document.createElement("p");
    dayText.classList.add("day-text");

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
const
}

drawBlankCalender();
