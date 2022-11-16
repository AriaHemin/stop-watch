let timeDisplay = document.querySelector("#timeDisplay");
let startButton = document.querySelector("#startButton");
let pauseButton = document.querySelector("#pauseButton");
let stopButton = document.querySelector("#stopButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener("click", () => {
    if (paused == true){
        paused = false
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
    console.log(paused)
});
pauseButton.addEventListener("click", () => {
    
    if (paused == false){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }

});
stopButton.addEventListener("click", () => {
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    paused = true;
    intervalId;
    hrs = 0;
    mins = 0;
    secs = 0;

    clearInterval(intervalId);
    timeDisplay.textContent = '00:00:00';

});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (100 * 60 * 60)) % 60);

    
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (('0') + unit).length > 2 ? unit : "0" + unit; 
    }

}
  