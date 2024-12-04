import { useState } from "react";
import { Howl } from "howler";

import "../styles/WeaGenerator.css";

import WEASound from "../assets/sounds/wea-sound.mp3";

import BatterySvg from "../assets/battery-60.svg";
import SignalSvg from "../assets/signal-cellular-2.svg";
import WifiSvg from "../assets/wifi.svg";
import AlertSvg from "../assets/alert-outline.svg";

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

function PhoneScreen({ dateInfo, alert }) {
  if (!alert) {
    return <div className="screen off"></div>;
  } else if (alert === "Generating...") {
    return (
      <div className="screen off">
        <p className="wea-generating">{alert}</p>
      </div>
    );
  } else if (alert === "Error generating alert. Please try again.") {
    return <div className="screen off">{alert}</div>;
  } else {
    return (
      <div className="screen on">
        <div className="top-wrapper">
          <div className="phone-status">
            <p className="carrier">Carrier</p>
            <div className="status-icons">
              <img src={SignalSvg} alt="" />
              <img src={WifiSvg} alt="" />
              <img src={BatterySvg} alt="" />
            </div>
          </div>
          <div className="date-info">
            <p className="date">{dateInfo.currentDate}</p>
            <p className="time">{dateInfo.currentTime}</p>
          </div>
        </div>
        <div className="bottom-wrapper">
          {alert ? (
            <div className="alert-notification">
              <img src={AlertSvg} alt="" />
              <div className="alert-body">
                <p className="title">Emergency Alert</p>
                <p className="info">{alert}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="swipe-bar"></div>
        </div>
      </div>
    );
  }
}

function GeneratorFunctionality({ dateInfo }) {
  const [alertType, setAlertType] = useState("national");
  const [alert, setAlert] = useState("");
  const [soundOn, setSoundOn] = useState(true);

  function toggleSound() {
    setSoundOn(!soundOn);
  }

  function playWEASound() {
    const weaSound = new Howl({
      src: [WEASound],
      volume: 0.15,
      html5: true,
      onplay: () => {
        setTimeout(() => {
          weaSound.stop();
        }, 2500);
      },
    });

    weaSound.play();
  }

  async function generateEmergency() {
    const generatorEndpoint = import.meta.env.VITE_WEAGENERATOR_ENDPOINT;

    setAlert("Generating...");

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

        setAlert(data);

        if (soundOn) {
          playWEASound();
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
      <p className="wea-disclaimer">
        Any events depicted below are purely fictional. This is merely a
        semi-realistic depiction of a WEA.
      </p>
      <PhoneScreen dateInfo={dateInfo} alert={alert} />
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

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Generator({ visible }) {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours > 12) {
    hours -= 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const weekday = dayNames[now.getDay()];
  const month = monthNames[now.getMonth()];
  const monthday = now.getDate();

  const dateInfo = {
    currentDate: `${weekday}, ${month} ${monthday}`,
    currentTime: `${hours}:${minutes}`,
  };

  if (!visible) {
    return (
      <div className="wea-generator blurred">
        <GeneratorFunctionality dateInfo={dateInfo} />
      </div>
    );
  } else {
    return (
      <div className="wea-generator">
        <GeneratorFunctionality dateInfo={dateInfo} />
      </div>
    );
  }
}

function WeaGenerator() {
  const [visible, setVisible] = useState(true); // change to false after done

  function toggleVisibility() {
    setVisible(!visible);
  }

  if (!visible) {
    return (
      <>
        <Disclaimer toggleVisibility={toggleVisibility} />
        <Generator visible={visible} />
      </>
    );
  } else {
    return <Generator visible={visible} />;
  }
}

export default WeaGenerator;
