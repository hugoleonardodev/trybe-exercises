function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// Requirement 1;
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let getDayList = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dayNumber = dezDaysList[index];
        let dayElement = document.createElement('li');
        dayElement.className = 'day';
        if (dayNumber === 4 | dayNumber === 11 | dayNumber === 18) {
            dayElement.className = 'day-friday';
            dayElement.innerHTML = dayNumber;
            getDayList.appendChild(dayElement);
        } else if (dayNumber === 24 | dayNumber === 31) {
            dayElement.className = 'day-holiday';
            dayElement.innerHTML = dayNumber;
            getDayList.appendChild(dayElement);
        } else if (dayNumber === 25) {
            dayElement.className = 'holiday-friday-day';
            dayElement.innerHTML = dayNumber;
            getDayList.appendChild(dayElement);
        } else {
            dayElement.innerHTML = dayNumber;
            getDayList.appendChild(dayElement);
        };
    };
};
createDaysOfTheMonth();

//Requirement 2;

function createButton(string) {
	let buttonFeriados = document.createElement('button');
	buttonFeriados.id = 'btn-holiday';
	buttonFeriados.innerText = string;
	let buttonFeriadosContainer = document.querySelector('.buttons-container');
	buttonFeriadosContainer.appendChild(buttonFeriados);
};
createButton("Feriados", 'btn-holiday');

//Requirement 3;

function changeColorOnHolidays() {
	const backgroundColor = "rgb(238,238,238)";
	const button = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.day-holiday');
    const holidayFriday = document.querySelectorAll('.holiday-friday-day');
	
	button.addEventListener("click", changeColor);
	function changeColor() {
		for (let index = 0; index < holidays.length; index += 1) {
			if (holidays[index].style.backgroundColor === "green") {
				holidays[index].style.backgroundColor = "rgb(238,238,238)";
			} else {
				holidays[index].style.backgroundColor = "green";
			};
        };
        for (let index1 = 0; index1 < holidayFriday.length; index1 += 1) {
            if (holidayFriday[index1].style.backgroundColor === "green") {
                holidayFriday[index1].style.backgroundColor = "rgb(238,238,238)";
            } else {
                holidayFriday[index1].style.backgroundColor = "green";
            };
        };
	};
};
changeColorOnHolidays();
