import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./CanaryFountionBanner.module.css";
import LightSpeed from "react-reveal/LightSpeed";
const CanaryFountionBanner = () => {
  return (
    <div className={styles.foundationBanner}>
      <Container>
        <LightSpeed left>
          <h2 className={styles.foundationtext}>Canary Foundation</h2>
        </LightSpeed>
      </Container>
    </div>
  );
};

export default CanaryFountionBanner;
