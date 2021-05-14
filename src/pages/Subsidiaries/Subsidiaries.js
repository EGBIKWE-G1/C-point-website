import React, { useState } from "react";
// import axios from "axios";
// import CanaryLogo from "assets/img/whatwedo-img/canaryPointLogo.png";
import CanaryLogo from "../../assets/img/whatwedo-img/canaryPointLogo.png";

import Logo1 from "../../assets/img/whatwedo-img/companyLogo1.png";

import Logo2 from "../../assets/img/whatwedo-img/companyLogo2.png";
import Logo3 from "../../assets/img/whatwedo-img/companyLogo3.png";
import Logo4 from "../../assets/img/whatwedo-img/companyLogo4.png";
import Logo5 from "../../assets/img/whatwedo-img/companyLogo5.png";
import Logo6 from "../../assets/img/whatwedo-img/companyLogo6.png";
import IbcdLogo from "../../assets/img/whatwedo-img/IbdcLogo.png";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import style from "./SubsidiariesStyle";

const useStyles = makeStyles(style);

const Subsidiaries = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  // const [success, setSuccess] = useState([]);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/", email)
  //     .then((response) => setSuccess(response))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   setEmail("");
  // };
  // console.log(success);
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={10} className={classes.SubsidWrapper}>
          <Grid container className={classes.SubsidiariesHeader}>
            <Grid item className={classes.CanaryLogo}>
              <img src={CanaryLogo} width="100%" alt="canary logo" />
            </Grid>
            <Grid
              item
              xs={11}
              sm={5}
              md={6}
              className={classes.SubsidiariesHeadGrid}
            >
              <Typography
                variant="h5"
                gutterBottom
                className={classes.typographyH5}
              >
                Our Subsidiaries
              </Typography>
              <Typography variant="body1" className={classes.typographybody1}>
                CPCSL is a holding company for various other companies that
                offer a range of investment and financial services to the public
                with the aim of offering effective money management
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} className={classes.SubsidLogoWrapper}>
          <Grid container className={classes.subLogosDiv}>
            <Grid item className={classes.subLogoGrid}>
              <a href="/#" className={classes.companyLogoLink}>
                <img
                  src={Logo1}
                  alt="subsidiaries logo"
                  className={classes.subLogo}
                />
              </a>
            </Grid>
            <Grid item className={classes.subLogoGrid}>
              <a href="/#" className={classes.companyLogoLink}>
                <img
                  src={Logo2}
                  alt="subsidiaries logo"
                  className={classes.subLogo}
                />
              </a>
            </Grid>
            <Grid item className={classes.subLogoGrid}>
              <a href="/#" className={classes.companyLogoLink}>
                <img
                  src={Logo3}
                  alt="subsidiaries logo"
                  className={classes.subLogo}
                />
              </a>
            </Grid>
            <Grid item className={classes.subLogoGrid}>
              <a href="/#" className={classes.companyLogoLink}>
                <img
                  src={Logo4}
                  alt="subsidiaries logo"
                  className={classes.subLogo}
                />
              </a>
            </Grid>
            <Grid item className={classes.subLogoGrid}>
              <a href="/#" className={classes.companyLogoLink}>
                <img
                  src={Logo5}
                  alt="subsidiaries logo"
                  className={classes.subLogo}
                />
              </a>
            </Grid>
            <Grid item className={classes.subLogoGrid}>
              <a href="/#" className={classes.companyLogoLink}>
                <img
                  src={Logo6}
                  alt="subsidiaries logo"
                  className={classes.subLogo}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={10}
            sm={8}
            md={8}
            className={classes.SebastianHeadGrid}
          >
            <Typography variant="h5" className={classes.SebastianTypoText}>
              Sebastian BDC Ltd
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.SubsidWebDetails}>
          <Grid item xs={12} md={9} className={classes.SubsidDetailsGrid}>
            <Grid item className={classes.SubsidLogoContent}>
              <Grid className={classes.SubsidLogoIbdcDiv}>
                <a href="/#">
                  <img
                    src={IbcdLogo}
                    alt="IBDC logo"
                    className={classes.SubsidLogoIbdc}
                  />
                </a>
              </Grid>
              <Grid className={classes.buttonGrid}>
                <Button className={classes.button}>Visit Website</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10} className={classes.IbdcContent}>
              <Typography variant="body1" className={classes.typographybody2}>
                Sebastian BDC Ltd. Is a member of the CPCSL group of companies.
                Sebastian is a CBN licensed Bureau De Change company, whose
                services include but not limited to the buying and selling of
                foreign currency such as US Dollars, British Pounds and Euros.
                Sebastian BDC offers several competitive advantages in the
                market that makes it superior and unique from other BDCs in the
                Forex market. Their service extends to delivery services at a
                minimal fee for customers that purchase large amounts of
                currency , deposit of forex bought directly into the customer’s
                domiciliary account or the Naira equivalent into their Naira
                accounts.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={10} sm={10} md={10} className={classes.formContainer}>
            <Grid item xs={6} md={6} className={classes.signUpGrid}>
              <Grid>
                <Typography className={classes.signUpTypo}>
                  Stay updated with the Canary weekly newsletter!
                </Typography>
              </Grid>
              <Grid className={classes.formdiv}>
                <form noValidate autoComplete="off">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    // autoFocus="true"
                    placeholder="Email Address"
                    onChange={handleChange}
                    className={classes.input}
                  />
                  <Button type="submit" className={classes.singUpBtn}>
                    Sign Up
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Subsidiaries;
