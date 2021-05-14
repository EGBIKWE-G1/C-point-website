import React from "react";
import styles from "./CanaryFountionBanner.module.css";
import firstfoundationimg from "../../assets/foundationimg/firstfoundation.png";
import secondfoundation from "../../assets/foundationimg/secondfoundation.png";
import thirdfoundation from "../../assets/foundationimg/thirdfoundation.png";
import Container from "@material-ui/core/Container";
import LightSpeed from "react-reveal/LightSpeed";
const FoundationCard = () => {
  return (
    <div style={{ background: "white" }}>
      <Container>
        <div className={styles.foundationcardglobalcontainer}>
          <LightSpeed right>
            <p className={styles.foundationcarddescription}>
              <span className={styles.foundationcarddescriptionbolded}>
                {" "}
                CSR
              </span>{" "}
              Example
            </p>
          </LightSpeed>
          <div className={styles.foundationbordercontainer}>
            <div className={styles.imgfoundationcontainer}>
              <img
                style={{ borderRadius: "4px" }}
                src={firstfoundationimg}
                alt="Make money"
                width="100%"
                height="auto"
              />
            </div>
            <div className={styles.sidetextoffoundationcard}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div className={styles.foundationcardglobalcontainer}>
          <LightSpeed right>
            <p className={styles.foundationcarddescription}>
              <span className={styles.foundationcarddescriptionbolded}>
                {" "}
                CSR
              </span>{" "}
              Example
            </p>
          </LightSpeed>
          <div className={styles.foundationbordercontainer}>
            <div className={styles.imgfoundationcontainer}>
              <img
                style={{ borderRadius: "4px" }}
                src={secondfoundation}
                alt="Make money"
                width="100%"
                height="auto"
              />
            </div>
            <div className={styles.sidetextoffoundationcard}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div className={styles.foundationcardglobalcontainer}>
          <LightSpeed right>
            <p className={styles.foundationcarddescription}>
              <span className={styles.foundationcarddescriptionbolded}>
                {" "}
                CSR
              </span>{" "}
              Example
            </p>
          </LightSpeed>
          <div
            className={styles.foundationbordercontainer}
            style={{ marginBottom: "2rem" }}
          >
            <div className={styles.imgfoundationcontainer}>
              <img
                style={{ borderRadius: "4px" }}
                src={thirdfoundation}
                alt="Make money"
                width="100%"
                height="auto"
              />
            </div>
            <div className={styles.sidetextoffoundationcard}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FoundationCard;
