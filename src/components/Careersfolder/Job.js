import React from "react";
import CareerJobForm from "./CareerJobForm";
import CareersJob from "./CareersJob";
import Interested from "./Interested";
import WhatWeNeed from "./WhatWeNeed";

const Job = () => {
  return (
    <div>
      <CareersJob />
      <Interested />
      <WhatWeNeed />
      <CareerJobForm />
    </div>
  );
};
export default Job;
