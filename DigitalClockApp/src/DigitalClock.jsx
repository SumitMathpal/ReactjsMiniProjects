import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}${meridiem}` 
  }

  function padzero(number){
    return(number < 10 ? "0" : "" )+number;
  }

  return (
    <div className="Clock-Container">
      <div className="Clock">
        <span>{formatTime()}</span>
      </div>
      <button className="stop-btn" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default DigitalClock;
