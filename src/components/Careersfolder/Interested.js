import React from "react";
import Container from "@material-ui/core/Container";
import styles from "../Careersfolder/Careers.module.css";
import { Link } from "react-router-dom";
const Interested = () => {
  return (
    <section className={styles.interestedbkground}>
      <Container>
        <section className={styles.interestedcontainer}>
          <div className={styles.textalljob}>
            <h1 className={styles.interestedinnertext}>
              Interested in Working with Us?
            </h1>
            <p className="paragraghjob">
              Your desired position may not be available at the moment, but
              we’re always on the lookout for top<br></br> talent. Simply send
              your application to hr@canarypointcs.com
            </p>
          </div>
        </section>
        <div className={styles.careerjobswitch}>
          <Link to="/careers">
            <span>Careers</span>
          </Link>{" "}
          &gt;
          <Link to="/job">
            <span>Jobs</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default Interested;
