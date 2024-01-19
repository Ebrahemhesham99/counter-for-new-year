const daysCL = document.getElementById('days');
const minsCL = document.getElementById('mins');
const hoursCL = document.getElementById('hours');
const secondsCL = document.getElementById('seconds');
function countdown() {
    const newYearDAte = new Date(2025,0,1);
    const currentyear = new Date(); 
    const totalSeconds = (newYearDAte - currentyear)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60)
    daysCL.innerHTML = formatTime(days);
    minsCL.innerHTML = formatTime(mins);
    hoursCL.innerHTML = formatTime(hours);
    secondsCL.innerHTML = formatTime(seconds);
};
setInterval(countdown,1000);
function formatTime(Time) {
    return Time < 10 ? `0${Time}` : Time;
  }
  