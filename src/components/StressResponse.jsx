import { useState } from "react";

import HeartSVG from "../assets/heart.svg";

import "../styles/StressResponse.css";

function Heart({ beatSpeed }) {
  const heartStyle = {
    animationDuration: `${beatSpeed}s`,
  };

  return (
    <img
      src={HeartSVG}
      alt="Beating heart"
      className="heart"
      style={heartStyle}
    />
  );
}

function StressResponse() {
  const [beatSpeed, setBeatSpeed] = useState(1);
  const [alarmOn, setAlarmOn] = useState(false);

  function toggleAlarm() {
    setAlarmOn(!alarmOn);

    if (alarmOn) {
      setBeatSpeed(1);
    } else {
      setBeatSpeed(0.5);
    }
  }

  return (
    <div className="stress-response">
      <Heart beatSpeed={beatSpeed} />
      {alarmOn ? (
        <button
          type="button"
          className="alarm on"
          onClick={toggleAlarm}
        ></button>
      ) : (
        <button
          type="button"
          className="alarm off"
          onClick={toggleAlarm}
        ></button>
      )}
    </div>
  );
}

export default StressResponse;
