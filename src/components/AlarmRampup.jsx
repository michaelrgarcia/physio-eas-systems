import { useState } from "react";
import { Howl } from "howler";

import "../styles/AlarmRampup.css";

import Siren from "../assets/sounds/seamless_siren_loop.mp3";

const siren = new Howl({
  src: [Siren],
  volume: 0,
  loop: true,
  rate: 0.5,
});

function AlarmRampup() {
  const [playing, setPlaying] = useState(false);
  const [control, setControl] = useState(0);
  const [ramping, setRamping] = useState(false);

  function toggleAlarm() {
    if (playing) {
      rampDown();
    } else {
      siren.play();
      rampUp();
    }

    setPlaying(!playing);
  }

  function rampUp() {
    if (!ramping) {
      setRamping(true);

      let currentControl = 0;

      const interval = setInterval(() => {
        currentControl = Math.min(currentControl + 0.01, 1);

        siren.volume(currentControl * 0.1);
        siren.rate(0.5 + currentControl);

        setControl(currentControl);

        if (currentControl >= 1) {
          clearInterval(interval);
          setRamping(false);
        }
      }, 100);
    }
  }

  function rampDown() {
    if (!ramping) {
      setRamping(true);

      let currentControl = control;

      const interval = setInterval(() => {
        currentControl = Math.max(currentControl - 0.01, 0);

        siren.volume(currentControl * 0.1);
        siren.rate(0.5 + currentControl);

        setControl(currentControl);

        if (currentControl <= 0) {
          clearInterval(interval);
          siren.stop();
          setRamping(false);
        }
      }, 100);
    }
  }

  function handleChange(e) {
    const newControl = parseFloat(e.target.value);

    siren.volume(newControl * 0.1);
    siren.rate(0.5 + newControl);
    setControl(newControl);
  }

  return (
    <div className="rampup-alarm">
      <button type="button" onClick={toggleAlarm} disabled={ramping}>
        {playing ? "Stop" : "Start"}
      </button>
      <div className="slider-container">
        <label htmlFor="volume-slider">
          Intensity: {Math.round(control * 100)}%
        </label>
        <input
          type="range"
          id="volume-slider"
          min={0}
          max={1}
          step={0.01}
          value={control}
          onChange={handleChange}
          disabled
        />
      </div>
    </div>
  );
}

export default AlarmRampup;
