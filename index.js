// Time Variables
var intervalId;
var seconds = 0;
var minutes = 0;
var hours = 0;

// Element Variables
const startBtnEle = document.getElementById("start-btn");
const secondsEle = document.getElementById("seconds");
const minutesEle = document.getElementById("minutes");
const hoursEle = document.getElementById("hours");

const startTimer = function () {

    startBtnEle.textContent = "Start";
    startBtnEle.style.backgroundColor = "#185DE6";

    clearInterval(intervalId);
    intervalId = setInterval(start, 1000);
}

const pauseTimer = function () {

if (typeof intervalId !== 'undefined')
    startBtnEle.textContent = "Resume";
    startBtnEle.style.backgroundColor = "green";
        
    clearInterval(intervalId);
}

const resetTimer = function () {

    seconds = 0;
    minutes = 0;
    hours = 0;

    startBtnEle.textContent = "Start";
    startBtnEle.style.backgroundColor = "#185DE6";
    clearInterval(intervalId);

    secondsEle.textContent = "00";
    minutesEle.textContent = "00";
    hoursEle.textContent = "00";
}

const start = function () {

    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24)
                return resetTimer();
        }
    }

    secondsEle.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesEle.textContent = minutes < 10 ? "0" + minutes : seconds;
    hoursEle.textContent = hours < 10 ? "0" + hours : seconds;
}