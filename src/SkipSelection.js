import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./SkipSelection.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const SkipSelection = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((response) => response.json())
      .then((data) => {
        const additionalSkip = {
          id: "manual-5",
          size: 5,
          hire_period_days: 14,
          price_before_vat: 300,
          vat: 20,
          allowed_on_road: true,
          allows_heavy_waste: true,
        };
        const sortedSkips = [...data, additionalSkip].sort(
          (a, b) => a.size - b.size
        );
        setSkips(sortedSkips);
      });
  }, []);

  const skipImageBaseUrl =
    "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/";

  return (
    <div className="skip-selection">
      <ProgressBar />
      <h1>Choose Your Skip Size</h1>
      <p className="subheading">
        Select the skip size that best suits your needs
      </p>
      <div className={`skip-grid ${isMobile ? "mobile" : ""}`}>
        {skips.map((skip) => (
          <div
            key={skip.id}
            className="skip-card"
            onClick={() => setSelectedSkip(skip)}
          >
            <img
              src={`${skipImageBaseUrl}${skip.size}-yarder-skip.jpg`}
              alt={`${skip.size} Yard Skip`}
            />
            <h2>{skip.size} Yard Skip</h2>
            <p>£{skip.price_before_vat + skip.vat}</p>
            <button>Pick Skip</button>
          </div>
        ))}
      </div>

      {selectedSkip && (
        <div className="modal">
          <div className="modal-content">
            <div className="text-content">
              <h2>{selectedSkip.size} Yard Skip</h2>
              <p>Hire period: {selectedSkip.hire_period_days} days</p>
              <p>Price: £{selectedSkip.price_before_vat + selectedSkip.vat}</p>
              <p className="small-text">
                Imagery and information shown throughout this website may not
                reflect the exact shape or size specification, colours may vary,
                options and/or accessories may be featured at additional cost.
              </p>
              <div className="action-buttons">
                <button onClick={() => setSelectedSkip(null)}>Cancel</button>
                <button>Continue</button>
              </div>
            </div>
            <img
              src={`${skipImageBaseUrl}${selectedSkip.size}-yarder-skip.jpg`}
              alt={`${selectedSkip.size} Yard Skip`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelection;
