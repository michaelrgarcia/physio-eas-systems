import { useState } from "react";
import { Howl } from "howler";

import "../styles/EmergencyGenerator.css";

import EASSound from "../assets/sounds/eas-alert-usa.mp3";

function Disclaimer({ toggleVisibility }) {
  return (
    <div className="disclaimer-overlay">
      <p className="warning">WARNING</p>
      <p>
        The following contains sounds and scenarios that may induce anxiety.
      </p>
      <p>Please proceed with caution.</p>
      <button
        type="button"
        className="confirm-disclaimer"
        onClick={toggleVisibility}
      >
        OK
      </button>
    </div>
  );
}

function GeneratorFunctionality() {
  const [alertType, setAlertType] = useState("national");
  const [alert, setAlert] = useState("");
  const [soundOn, setSoundOn] = useState(true);

  function formatAlert(alert) {
    const alertArray = alert.split("  \n");

    return (
      <div className="alert">
        {alertArray.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }

  function toggleSound() {
    setSoundOn(!soundOn);
  }

  function playEASSound() {
    const easSound = new Howl({
      src: [EASSound],
      volume: 0.5,
      html5: true,
      onplay: () => {
        setTimeout(() => {
          easSound.stop();
        }, 3000);
      },
    });

    easSound.play();
  }

  async function generateEmergency() {
    const generatorEndpoint = import.meta.env.VITE_EASGENERATOR_ENDPOINT;

    setAlert("Generating alert...");

    try {
      const result = await fetch(generatorEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alertType,
        }),
      });

      if (result.ok) {
        const data = await result.json();
        const formattedAlert = formatAlert(data);

        setAlert(formattedAlert);

        if (soundOn) {
          playEASSound();
        }
      } else {
        throw new Error("Error generating alert.");
      }
    } catch (error) {
      console.error(error);

      setAlert("Error generating alert. Please try again.");
    }
  }
  return (
    <>
      <p className="eas-disclaimer">
        Any events depicted below are purely fictional. This is merely a
        semi-realistic depiction of the EAS system.
      </p>
      <div className="screen">{alert}</div>
      <div className="controls">
        <div className="alert-type">
          <span>Select an alert type:</span>
          <select
            name="alert"
            id="alert"
            onChange={(e) => setAlertType(e.target.value)}
          >
            <option value="national">National/Presidential</option>
            <option value="imminent">Imminent Threat</option>
            <option value="amber">AMBER Alert</option>
            <option value="pubsafety">Public Safety</option>
          </select>
        </div>
        <div className="control-buttons">
          <button
            type="button"
            className="generate"
            onClick={generateEmergency}
          >
            Generate
          </button>
          {soundOn ? (
            <button
              type="button"
              className="sound-on"
              onClick={toggleSound}
            ></button>
          ) : (
            <button
              type="button"
              className="sound-off"
              onClick={toggleSound}
            ></button>
          )}
        </div>
      </div>
    </>
  );
}

function EmergencyGenerator() {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible(!visible);
  }

  if (!visible) {
    return (
      <>
        <Disclaimer toggleVisibility={toggleVisibility} />
        <div className="emergency-generator blurred">
          <GeneratorFunctionality />
        </div>
      </>
    );
  } else {
    return (
      <div className="emergency-generator">
        <GeneratorFunctionality />
      </div>
    );
  }
}

export default EmergencyGenerator;
