import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import EASLogo from "../public/EAS.svg";
import WEASymbol from "./assets/WEAsymbol.png";

import EmergencyGenerator from "./components/EmergencyGenerator.jsx";
import StressResponse from "./components/StressResponse.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <section className="intro">
      <h1>The Physiological Effects of Alert Systems</h1>
      <p className="name">Michael Garcia</p>
      <h2>Introduction</h2>
      <p>
        Emergency alert systems play a critical role in public safety, providing
        timely warnings during disasters and emergencies. Two prominent systems
        in the United States are the Emergency Alert System (EAS) and Wireless
        Emergency Alerts (WEAs).
      </p>
      <div className="logos">
        <figure>
          <img src={EASLogo} alt="EAS Logo from FCC handbooks" />
          <figcaption>
            <span>Source: </span>FCC EAS 2007 TV Handbook
          </figcaption>
        </figure>
        <figure>
          <img src={WEASymbol} alt="Unofficial WEA symbol" />
          <figcaption>
            <span>Source: </span>
            <a href="https://www.weather.gov/crp/wea" target="_blank">
              weather.gov
            </a>
          </figcaption>
        </figure>
      </div>
      <p>
        While both systems aim to save lives, their design and delivery impact
        their effectiveness and the physical responses they evoke. This mock
        research paper examines how these systems operate, explores the
        physiological effects of emergency alerts, and highlights the advantages
        of WEAs over EAS, while addressing gaps in accessibility and equity.
      </p>
    </section>
    <section className="eas-system">
      <h2>Understanding the EAS System</h2>
      <p>
        The Emergency Alert System (EAS), operational since 2012, is part of the
        Integrated Public Alert and Warning System (IPAWS). Initially developed
        after the September 11, 2001, terrorist attacks, it enables federal,
        state, and local authorities to broadcast alerts across radio,
        television, and mobile devices.{" "}
      </p>
      <p>
        EAS alerts are categorized into four types: National/Presidential Alerts
        – Reserved for use by the President during national emergencies.
        Imminent Threat Alerts – Focused on local-level hazards, such as extreme
        weather. AMBER Alerts – Issued for missing or abducted children. Public
        Safety Alerts – Provide general warnings about potential threats.
      </p>
      <div className="interactive-eas">
        <EmergencyGenerator />
      </div>
      <p>
        Clearly, EAS broadcasts can reach broad audiences but rely on loud,
        intrusive tones and wide dissemination. This approach often leads to
        over-alerting, which risks desensitizing the public and creating
        unnecessary stress responses. (Georgia Institute of Technology)
      </p>
      <h2>The Physiological Stress Response and Emergency Alerts</h2>
      <p>
        Emergency alerts are known to trigger the body’s physiological stress
        response, a survival mechanism that prepares the body for threats. This
        response consists of an increased heart rate, elevated cortisol levels,
        and heightened arousal. Research indicates that loud, abrupt emergency
        tones can exacerbate acute stress responses, impairing cognitive
        functions and decision-making. (Hall et al.)
      </p>
      <StressResponse />
      <p>
        Over time, repeated exposure to these alerts, especially during
        nighttime hours, can contribute to chronic stress-related health issues,
        such as cardiovascular strain and sleep disturbances. Traditional alarm
        tones cause significant heart rate spikes, impacting the readiness and
        mental clarity of emergency responders. (MacNeal et al.)
      </p>
    </section>
  </StrictMode>
);
