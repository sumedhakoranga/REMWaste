import React from "react";
import "./ProgressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTrash,
  faDumpster,
  faFileAlt,
  faCalendarAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  { label: "Postcode", icon: faMapMarkerAlt },
  { label: "Waste Type", icon: faTrash },
  { label: "Select Skip", icon: faDumpster },
  { label: "Permit Check", icon: faFileAlt },
  { label: "Choose Date", icon: faCalendarAlt },
  { label: "Payment", icon: faCreditCard },
];

const ProgressSteps = () => {
  return (
    <div className="progress-steps">
      <div className="progress-steps__container">
        {steps.map(({ label, icon }, index) => (
          <div className="progress-steps__item" key={index}>
            <div
              className={`progress-steps__dot ${index <= 2 ? "completed" : ""}`}
            />

            <FontAwesomeIcon
              icon={icon}
              className={`progress-steps__icon-only ${
                index <= 2 ? "completed" : ""
              }`}
            />

            <div className="progress-steps__label-container">
              <span className="progress-steps__label">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
