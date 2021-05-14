import React, { useState } from "react";
import JobOne from "./JobOne";
import JobTwo from "./JobTwo";
import "./Active.css";

const WhatWeNeed = () => {
  const [jobswitch, setjobswitch] = useState(true);

  const handleJobSwitch = () => {
    setjobswitch(!jobswitch);
  };

  return (
    <div
      className="interested-border atminimumcontainer"
      style={{ backgroundColor: "white", display: "flex" }}
    >
      <div className="dommy-for-container switchpanel">
        <p
          className={
            jobswitch
              ? "job-status-click hover-text-size"
              : "job-status-click1 hover-text-size"
          }
          onClick={handleJobSwitch}
        >
          Job 1
        </p>

        <p
          className={
            jobswitch
              ? "job-status-click1 hover-text-size"
              : "job-status-click hover-text-size"
          }
          onClick={handleJobSwitch}
        >
          Job 2
        </p>
      </div>
      <div className="text-jurisdiction-what-we-need">
        {jobswitch ? <JobOne /> : <JobTwo />}
      </div>
    </div>
  );
};

export default WhatWeNeed;
