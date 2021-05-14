import React from "react";
import styles from "../Careersfolder/Careers.module.css";
import "./Active.css";
import LightSpeed from "react-reveal/LightSpeed";
const CareersJob = () => {
  return (
    <section className={styles.backgroundjobbanner}>
      <LightSpeed right>
        <h1 className="text-center-careers">Careers</h1>
      </LightSpeed>
    </section>
  );
};
export default CareersJob;
