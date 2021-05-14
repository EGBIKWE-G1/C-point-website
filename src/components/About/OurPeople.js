import React, { useState } from "react";
import styles from "./About.module.css";
import Container from "@material-ui/core/Container";
import "./About.css";
import Management from "./Management";
import Director from "./Director";
const OurPeople = () => {
  const [toogleourpeople, setToogleourpeople] = useState(true);
  const handleTooglepeople = () => {
    setToogleourpeople((prev) => !prev);
  };
  return (
    <div className={styles.containercolor} style={{ position: "relative" }}>
      <Container>
        <div className={styles.ourpeopletextcontainer}>
          <h1
            className={styles.abouttextcontainersmall}
            style={{ textAlign: "center", marginBottom: "0" }}
          >
            <span className={styles.aboutbolded}>Our</span> People
          </h1>
          <p className={styles.ourpeoplesubtext}>
            Meet the people at the helm of affairs
          </p>
        </div>
        <div className={styles.btntogglecontainer}>
          <button
            className={
              toogleourpeople
                ? "btntogglecontainerfirstactive"
                : "btntogglecontainerfirstnonactive"
            }
            onClick={handleTooglepeople}
            id="btn-management-margin"
          >
            Management
          </button>
          <button
            className={
              toogleourpeople
                ? "btntogglecontainerfirstnonactive"
                : "btntogglecontainerfirstactive"
            }
            onClick={handleTooglepeople}
          >
            Directors
          </button>
        </div>
        {toogleourpeople ? <Management /> : <Director />}
      </Container>
    </div>
  );
};

export default OurPeople;
