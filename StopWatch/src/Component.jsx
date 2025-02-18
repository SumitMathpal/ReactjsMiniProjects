import React, { useEffect, useRef, useState } from 'react'

const Component = () => {

  const[isrunning,setIsRunning] = useState(false);
  const[elapsedTime,setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);


  useEffect(()=>{
if(isrunning){
  intervalIdRef.current = setInterval(() => {
    setElapsedTime(Date.now()-startTimeRef.current)
  }, 10);

}
    return ()=>{
      clearInterval(intervalIdRef.current);
    }

  },[isrunning]);

  function start(){
setIsRunning(true);
startTimeRef.current = Date.now()-elapsedTime;
  }

  function stop(){
setIsRunning(false);
  }

  function reset(){
    setElapsedTime(0);
    setIsRunning(false);


  }

  function formatTime(){
let hourse = Math.floor(elapsedTime /(1000 * 60 * 60));
let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
let seconds = Math.floor(elapsedTime/(1000)%60);
let milisecond = Math.floor((elapsedTime % 1000) / 10);

return `${String(minutes).padStart(2,'0')}:${ String(seconds).padStart(2,'0')}:${String(milisecond).padStart(2,0)}`;
  }

  return (
    <div  className='stopWatch'>
       <div className="display">
        {formatTime()}
       </div>

       <div className="btns">
        <button onClick={start}  className='start-btn'>Start</button>
        <button onClick={stop} className='stop-btn'>  Stop</button>
        <button onClick={reset} className='reset-btn'>Reset</button>
       </div>
    </div>
  )
}

export default Component;
