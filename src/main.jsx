import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import EASLogo from "../public/EAS.svg";
import WEASymbol from "./assets/WEAsymbol.png";

import EmergencyGenerator from "./components/EmergencyGenerator.jsx";
import StressResponse from "./components/StressResponse.jsx";
import WeaGenerator from "./components/WeaGenerator.jsx";
import AlarmRampup from "./components/AlarmRampup.jsx";

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
        action, but it may do so by evoking
        unnecessarily excessive stress responses. (Georgia Institute of Technology)
      </p>
      <h2>The Physiological Stress Response and Emergency Alerts</h2>
      <p>
        Emergency alerts are known to trigger the body’s physiological stress response, a survival mechanism that prepares the body for threats. 
        This response consists of an increased heart rate, elevated cortisol levels, and heightened arousal. 
      </p>
      <p>
        The human stress response operates primarily through two pathways: the hypothalamic-pituitary-adrenal (HPA) axis and the sympathoadrenal system. 
        Activation of the HPA axis leads to the release of cortisol, which supports metabolism and energy mobilization, while the sympathoadrenal system releases catecholamines like epinephrine and norepinephrine, causing immediate physiological changes such as increased heart rate and blood pressure. (Hall et al., PLOS ONE)
      </p>
      <p>
        Research indicates that loud, abrupt emergency tones can exacerbate acute stress responses, impairing cognitive functions and decision-making. For example, elevated cortisol and rapid shifts in heart rate due to sudden alarms can impair problem-solving abilities under stress. (Hall et al., PLOS ONE)
      </p>
      <StressResponse />
      <p>
        Over time, repeated exposure to these alerts, especially during
        nighttime hours, can contribute to chronic stress-related health issues,
        such as cardiovascular strain and sleep disturbances. Traditional alarm
        tones cause significant heart rate spikes, impacting the readiness and
        mental clarity of emergency responders, for example. (MacNeal et al.)
      </p>
    </section>
    <section className="wea-benefits">
      <h2>The Benefits of WEAs Over EAS</h2>
      <p>
        Unlike the EAS, WEAs use text-based notifications delivered to mobile
        devices. This minimizes the startling effects of loud broadcast tones
        and reduces the acute stress responses often associated with traditional
        alert systems (Georgia Institute of Technology).
      </p>
      <p>
        WEAs provide targeted, location-specific alerts, which avoid unnecessary
        notifications for unaffected populations. This precision fosters a sense
        of control, reducing anxiety and cognitive overload (RAND Corporation).
        Additionally, WEAs allow for concise messaging that improves situational
        awareness (University of California, Los Angeles).
      </p>
      <div className="interactive-wea">
        <WeaGenerator />
      </div>
      <p>
        However, the reduced acute stress responses from WEAs may lead to less action from those who receive them (Georgia Institute of Technology). WEAs may also reinforce inequalities in access to emergency
        information. Communities without access to mobile technology or reliable
        network coverage are less likely to benefit from these alerts, leaving
        underserved populations more vulnerable during emergencies (Ellcessor).
      </p>
    </section>
    <section className="improving-eas">
      <h2>Improving Emergency Alert Systems</h2>
      <p>
        To maximize the effectiveness of emergency alert systems while
        addressing stress and accessibility concerns, several improvements can
        be implemented. Gradually increasing the volume of alerts can reduce
        heart rate spikes and mitigate stress responses (MacNeal et al.).
      </p>
      <p className="rampup-disclaimer">
        Click &quot;Start&quot; to hear a ramp-up tone! This is not an actual
        alarm—it is a demonstration of concept.
      </p>
      <AlarmRampup />
      <p>
        Along with this, adding visual aids like maps and improving message
        clarity can reduce confusion and increase comprehension (University of
        California, Los Angeles).
      </p>
      <p>
        Accessibility gaps can be addressed by subsidizing mobile technology and
        improving network infrastructure in underserved areas, making WEAs more
        equitable (Ellcessor).
      </p>
      <p>
        Implementing quieter tones for nighttime alerts can minimize sleep
        disruptions and long-term health risks (Hall et al.). Allowing users to
        customize alert tones and styles can improve user experience and reduce
        unnecessary stress (Georgia Institute of Technology).
      </p>
    </section>
    <section className="conclusion">
      <h2>Conclusion</h2>
      <p>
        Both EAS and WEAs play crucial roles in emergency communication, but
        their impact on the public varies based on their design and delivery.
        While WEAs demonstrate clear advantages in reducing stress responses and
        improving alert precision, aiming for actionable responses and adressing inequities in access is essential
        for ensuring universal effectiveness. Incorporating ramp-up tones,
        enhancing WEA capabilities, and prioritizing accessibility can create an
        all-around more considerate alert system, which would ultimately save
        more lives.
      </p>
    </section>
  </StrictMode>
);
