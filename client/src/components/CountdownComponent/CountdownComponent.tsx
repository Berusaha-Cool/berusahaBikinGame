import React, { useState, useContext } from 'react'
import TimerComponent from './TimerComponent/TimerComponent'
import InputComponent from './InputComponent/InputComponent'
import "./CountdownComponent.css"
const CountdownComponent = (props) => {
  const [isTimerRunning, setTimerRunning] = useState(false)
  const timerValue = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }
  const startCountdown = (timerData) => {
    setTimer(timerData)
    setTimerRunning(!isTimerRunning)
  }
  const stopCountdown = () => {
    setTimer(timerValue)
    setTimerRunning(!isTimerRunning)
  }
  const [timer, setTimer] = useState(timerValue)
  return (
    <div className="App">
      <header className={'dark'}>
        {isTimerRunning ? (
          <TimerComponent timerData={timer} stopCountdown={stopCountdown} />
        ) : (
          <InputComponent startCountdown={startCountdown} />
        )}
      </header>
    </div>
  )
}
export default CountdownComponent
