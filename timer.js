class Timer {
  constructor(startBtn, durationInput, pauseBtn, callbacks) {
    this.startBtn = startBtn;
    this.durationInput = durationInput;
    this.pauseBtn = pauseBtn;
    if(callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    this.startBtn.addEventListener('click', this.start)
    this.pauseBtn.addEventListener('click', this.pause)
  }

  start = () => {
    if(this.onStart) {
      this.onStart(this.timeRemaining)
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);
  }

  pause = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    if(this.timeRemaining <= 0) {
      this.pause();
      if(this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02
      if(this.onTick) {
        this.onTick(this.timeRemaining)
      }
    }
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    return this.durationInput.value = time.toFixed(2);
  }
  
}