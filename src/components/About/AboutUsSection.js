import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./About.module.css";
import aboutimg from "../../assets/modal/markus.png";
import LightSpeed from "react-reveal/LightSpeed";

const AboutUsSection = () => {
  return (
    <div>
      <Container>
        <div className={styles.aboutUsSectioncontainer}>
          <div className={styles.aboutusitemone}>
            <LightSpeed left>
              <h2 className={styles.abouttextcontainersmall}>
                <span className={styles.aboutbolded}>About</span> Us
              </h2>
            </LightSpeed>
            <div>
              <p className={styles.itemonetext}>
                {" "}
                Canary Point Corporate Services Ltd. is a financial services
                group of companies. CPCS is the holding company for other
                companies offering specialized financial services and support
                solutions to individuals, businesses and organisations.
              </p>{" "}
              <p className={styles.itemonetext}>
                We provide a diversified range of services such as: MSME
                financing, Assets Financing, Trade financing, Remittances,
                Investment Banking and Bureau De change.{" "}
              </p>{" "}
              <p className={styles.itemonetext}>
                To position CPCS as a one stop financial innovation center, we
                provide products with superior solutions and we pride ourselves
                in our ability to provide quality, excellent and exceptional
                service. As such, we are deliberate in ensuring that our people
                resources are constantly abreast of innovation and market
                changes.
              </p>
            </div>
          </div>
          <div className={styles.aboutusitemtwo}>
            <div>
              <img src={aboutimg} alt="about-img" width="100%" height="auto" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;
