import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import EASLogo from "../public/EAS.svg";
import WEASymbol from "./assets/WEAsymbol.png";

import EASSystem from "./EASSystem.jsx";

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
    <EASSystem />
  </StrictMode>
);
