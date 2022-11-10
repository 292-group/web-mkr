import "./css/app.css";
import "./css/numb.css";
import "./css/tab.css";
import "./css/main.css";

'use strict';

// select DOM elements
let btnStart = document.querySelector('.btnStart');
let btnPause = document.querySelector('.btnPause');
let btnStop = document.querySelector('.btnStop');

let timeDisplay = document.querySelector('.timeDisplay');

let hour = '0' + 0,
  min = '0' + 0,
  sec = '0' + 0;

// Set initial time
timeDisplay.innerText = `${hour}:${min}:${sec}`;

let counter = -1,
  timer,
  timerStarted = false,
  timerPaused = false;

/* Timer Methods */

//   Method to START timer
let startTimer = () => {
  counter++;
  if (counter < 10) {
    counter = '0' + counter;
  }

  if (counter >= 60) {
    counter = '00';
    min++;
    if (min < 10) {
      min = '0' + min;
    }

    if (min >= 60) {
      counter = '00';
      min = '00';
      hour++;

      if (hour < 10) {
        hour = '0' + hour;
      }
    }
  }

  timer = setTimeout(() => {
    // timeDisplay.innerText = `${hour}:${min}:${counter}`;
    startTimer();
  }, 1000);
  
  timeDisplay.innerText = `${hour}:${min}:${counter}`;

  timerStarted = true;
};

// Method to PAUSE timer
let pauseTimer = () => {
  clearTimeout(timer);
  // counter--;
};

// Method to STOP timer
let stopTimer = () => {
  if (timerPaused !== true) clearTimeout(timer);
};

// Start the timer
btnStart.addEventListener('click', () => {
  if (timerStarted === false && btnStart.innerText === 'Start') {
    counter = -1;
    hour = '00';
    min = '00';
    // timeDisplay.innerText = `00:00:00`;
    startTimer();
  }

  if (timerStarted === false) {
    startTimer();
    btnStart.innerText = 'Start';
  }
});

// Pause the timer
btnPause.addEventListener('click', () => {
  if (timerStarted === true && timerPaused === false) pauseTimer();
  btnStart.innerText = 'Continue';
  timerStarted = false;
});

// Stop the timer
btnStop.addEventListener('click', () => {
  if (timerStarted === true) stopTimer();
  timerStarted = false;
});

 
function randomInt() { 
    let Number = []; 
    let Color = []; 
    let Size = []; 
 
    for (let j = 1; j <= 25; j++) { 
        let randomColor = Math.floor(Math.random() * 16777215).toString(16); 
        Color.push('#' + randomColor); 
    } 
 
    for (let i = 1; i <= 25; i++) 
        Number.push(i); 
 
    Number.sort(function () { return Math.random() - 0.5; }); 
 
    for (let s = 1; s <= 25; s++) { 
        let randomSize = Math.floor(Math.random() * 40) + 10; 
        Size.push(randomSize + 'px'); 
    } 
 
    let table = $('table'); 
    table.empty(); 
 
    let index = 0; 
    for (let r = 0; r < 5; ++r) { 
        let row = $('<tr>'); 
 
        for (let c = 0; c < 5; ++c) { 
 
            row.append('<td>' + Number[index++] + '</td>'); 
 
        } 
        table.append(row); 
    } 
    let cells = $('td') 
 
    for (var i = 0; i < cells.length; i++) { 
        cells[i].style.fontWeight = '600'; 
        cells[i].style.width = '150px'; 
        cells[i].style.height = '150px'; 
        cells[i].style.color = Color[Math.floor(Math.random() * Color.length)]; 
        cells[i].style.fontSize = Size[Math.floor(Math.random() * Size.length)]; 
    } 

} 
 
randomInt();