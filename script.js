const daysE1= document.getElementById('days');
const hourE1 = document.getElementById('hours');
const minuteE1 = document.getElementById('minutes');
const secondE1 = document.getElementById('seconds');

const newYear = "6 sept 2021";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSeconds /3600 /24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML=days;
    hourE1.innerHTML= formatTime(hours);
    minuteE1.innerHTML=formatTime(mins);
    secondE1.innerHTML = formatTime(seconds);

   
}
function formatTime(time){
    return time < 10 ? (`0${time}`): time;

}
countdown();
setInterval(countdown,1000);