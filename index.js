
let value = document.getElementById('timerValue');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const circle = document.querySelector('circle');


const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)
let duration;
const timer = new Timer(startBtn, value, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter)
  }, 
  onComplete() {
    console.log('Run out of time!')
  }
})