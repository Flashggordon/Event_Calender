const calender = document.getElementById('calender');

const drawBlankCalender = () => {
    for (let i = 0; i < 35; i++) {
    const day = document.createElement('div');
    day.classList.add('day');

    const dayText = document.createElement('p');
    dayText.classList.add('day-text');
  

    const dayNumber = document.createElement('p');
    dayNumber.classList.add('day-number');

    const eventName = document.createElement('p');
    eventName.classList.add('event-name');

    day.appendChild(dayText);
    day.appendChild(dayNumber);
    day.appendChild(eventName);
    console.log(day);
    calender.appendChild(day);
}
};
drawBlankCalender();