import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// instead of defining a let we have to use ref because when we use let we will have two bugs :
// 1) if we define it in the component function , the component will reevaluate more than one time , and it means that the defined timer in the handleStart will be different
// with the timer in handleStop
// 2) if we define the let outside of the component function , the previous problem will be solved but a new bug will generate , and the bug is when you click on two different
// timers consecutively , the second timer will be overwrite on the first one , and the first one start timer will be gone

// let timer;
function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining , setTimeRemaining] = useState(targetTime * 1000)
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open()
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000)
  }

  function handleStart() {
    timer.current = setInterval(() => {
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
    }, 10);
  }

  function handleStop() {
    dialog.current.open()
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "stop" : "start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
