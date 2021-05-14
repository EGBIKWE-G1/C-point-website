import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./About.module.css";
import LightSpeed from "react-reveal/LightSpeed";
const AboutBanner = () => {
  return (
    <div className={styles.aboutBanner}>
      <Container>  
        <LightSpeed left>
          <h2 className={styles.aboutbannertext}>
            We are deliberate in ensuring that our people and resources are
            geared towards being on top of innovation and market changes
          </h2>
        </LightSpeed>
      </Container>
    </div>
  );
};

export default AboutBanner;
