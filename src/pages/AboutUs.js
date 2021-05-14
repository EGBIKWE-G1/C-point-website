import React from "react";
import AboutBanner from "../components/About/AboutBanner";

import AboutUsSection from "../components/About/AboutUsSection";
import VisionMission from "../components/About/VisionMission";
import OurPeople from "../components/About/OurPeople";
import CareerJobForm from "../components/Careersfolder/CareerJobForm";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner />
      <AboutUsSection />
      <VisionMission />
      <OurPeople />
      <CareerJobForm />
    </div>
  );
};

export default AboutUs;
