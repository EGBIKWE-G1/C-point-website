import React from "react";
import Container from "@material-ui/core/Container";
import styles from "../Careersfolder/Careers.module.css";
import firstColony from "../../assets/images/firstcolony.png";
import lastcolony from "../../assets/images/lastcolony.png";
import LightSpeed from "react-reveal/LightSpeed";

const CanaryColony = () => {
  return (
    <section className={styles.bkgcolony}>
      <Container>
        <section className={styles.colonycontainer}>
          <section className={styles.flexcolonyitem}>
            <section className={styles.picturesdown}>
              <img
                src={lastcolony}
                alt="colony-team"
                height="auto"
                width="100%"
                className={styles.avatar}
              />
              <img
                src={firstColony}
                height="auto"
                width="100%"
                alt="colony-team-green"
                className={styles.avatar2}
              />{" "}
            </section>
          </section>
          <section className={styles.flexcolonyitem1}>
            <div>
              <LightSpeed right>
                <h3 className={styles.joinourteam}>
                  <span>Canary</span> Colony
                </h3>
                <p className={styles.colonytext}>
                  The canary colony is a blend of intellectuals who through
                  their creative differences find innovative ways to provide
                  sustainable financial services to positively impact our
                  customers.
                </p>
              </LightSpeed>
              <button className={styles.joinusbtn}>Join Us</button>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default CanaryColony;
