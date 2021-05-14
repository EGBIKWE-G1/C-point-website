import React from "react";
import InvestmentBankingImg from "../../assets/img/whatwedo-img/Investment-Banking.jpg";
import SwiftAlliedPartnerslogo from "../../assets/img/whatwedo-img/Swift-Allied-Partners-logo.png";
import MicrofinanceBankingImg from "../../assets/img/whatwedo-img/Microfinance-Banking.jpg";
import MicrofinanceLog0 from "../../assets/img/whatwedo-img/microAssets-Logo.png";
import NairagramLogo from "../../assets/img/whatwedo-img/nairagramLogo.gif";
import moneyImage from "../../assets/img/whatwedo-img/moneyImage.jpg";

import BureauLogo from "../../assets/img/whatwedo-img/BureauLogo.jpg";

import IbdcLogo from "../../assets/img/whatwedo-img/IbdcLogo.png";
import ProductsImage from "../../assets/img/whatwedo-img/productsImage.jpg";
import MonieTreeLogo from "../../assets/img/whatwedo-img/monieTreeImage.png";

import instantCashLogo from "../../assets/img/whatwedo-img/instantCash.gif";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import whatToDoStyle from "./WhatWeDoStyle";

const useStyles = makeStyles(whatToDoStyle);

const WhatWeDo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Grid item className={classes.headerBackgroungImg}>
          <Grid item xs={11} sm={6} md={5} className={classes.headerTextBox}>
            <Typography className={classes.headerHeadline}>
              what we do
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={11} md={8} className={classes.headlineContentGrid}>
              <Typography className={classes.headlineContentTypo}>
                We provide a diversified range of financial services through our
                subsidiaries such as MSME financing, Assets Financing, Trade
                financing, Remittances, Investment Banking and Bureau De change.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} md={10} className={classes.contentBodyGrid}>
          <Grid item xs={12} md={12} className={classes.contentBody}>
            <div>
              <Grid style={{ marginLeft: "20px", color: "#131747" }}>
                <Typography variant="h6" style={{ width: "100%" }}>
                  <span className={classes.boldTypeHeadline}>Investment</span>{" "}
                  Banking
                </Typography>
              </Grid>
              <Grid container style={{ position: "relative" }}>
                <Grid className={classes.undergroundLayer}></Grid>
                <Grid
                  item
                  className={classes.InvestmentBankingDiv}
                  xs={12}
                  md={10}
                >
                  <Grid>
                    <img
                      src={InvestmentBankingImg}
                      alt="Investment Banking"
                      className={classes.contentBigImg}
                    />
                  </Grid>
                  <Grid xs={12} md={8} className={classes.contents}>
                    <Typography className={classes.contentTypography}>
                      Our highly-skilled Investment Banking team work across
                      various asset classes, industries and currencies to
                      provide first class investment services, financing
                      solutions, foreign currency investments, wealth management
                      dedicated to helping our clients (HNI, organisations,
                      retail investors) build and sustain wealth.
                    </Typography>
                    <Grid className={classes.contentSmailImgDiv}>
                      <img
                        src={SwiftAlliedPartnerslogo}
                        alt="Swift-Allied-Partners-logo"
                        className={classes.contentSmailImage}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid className={classes.contentBody2}>
            <div style={{ position: "relative" }}>
              <Grid
                style={{
                  color: "#131747",
                  position: "absolute",
                  top: "0px",
                  right: "40px",
                }}
              >
                <Typography variant="h6" style={{ width: "100%" }}>
                  <span className={classes.boldTypeHeadline}>Microfinance</span>{" "}
                  Banking
                </Typography>
              </Grid>
              <Grid container style={{ position: "relative" }}>
                <Grid className={classes.MicrofinanceUndergroundLayer}></Grid>
                <Grid
                  item
                  className={classes.InvestmentBankingDiv2}
                  xs={12}
                  md={10}
                >
                  <Grid xs={12} md={4}>
                    <img
                      src={MicrofinanceBankingImg}
                      alt="Microfinance Banking"
                      className={classes.contentBigImg}
                    />
                  </Grid>
                  <Grid xs={12} md={8} className={classes.contents}>
                    <Typography className={classes.contentTypography}>
                      We provide ease of access to micro, small and medium
                      enterprises and SMEs with sustainable finance in micro
                      loans, asset finance, SME loans and other short-term
                      facilities.
                    </Typography>
                    <Grid className={classes.contentSmailImgDiv}>
                      <img
                        src={MicrofinanceLog0}
                        alt="Swift-Allied-Partners-logo"
                        className={classes.contentSmailImage}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid className={classes.contentBody}>
            <div>
              <Grid style={{ marginLeft: "20px", color: "#131747" }}>
                <Typography variant="h6" style={{ width: "100%" }}>
                  <strong>Remittance</strong>
                </Typography>
              </Grid>
              <Grid container style={{ position: "relative" }}>
                <Grid className={classes.remittanceUndergroundLayer}></Grid>
                <Grid
                  item
                  className={classes.InvestmentBankingDiv}
                  xs={12}
                  md={10}
                >
                  <Grid xs={12} md={4}>
                    <img
                      src={moneyImage}
                      alt="money-pix"
                      className={classes.contentBigImg}
                    />
                  </Grid>
                  <Grid xs={12} md={8} className={classes.contents}>
                    <Typography className={classes.contentTypography}>
                      Our Bureau De Change business is tailored to meet the
                      needs of our clients, need for speed and convenience. We
                      are regulated by the CBN and we facilitate foreign
                      currency trade and transfers to and on behalf of our
                      customers, we keep evolving and find more ways to solve
                      our customer foreign currency needs in an innovative way.
                    </Typography>
                    <Grid className={classes.contentSmailImgDiv}>
                      <img
                        src={NairagramLogo}
                        alt="Nairagram-logo"
                        className={classes.contentSmailImage}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid className={classes.contentBody}>
            <div style={{ position: "relative" }}>
              <Grid
                style={{
                  color: "#131747",
                  position: "absolute",
                  top: "0px",
                  right: "42px",
                }}
              >
                <Typography variant="h6" style={{ width: "100%" }}>
                  <span className={classes.boldTypeHeadline}>Bureau</span> de
                  Change
                </Typography>
              </Grid>
              <Grid container style={{ position: "relative" }}>
                <Grid className={classes.BureauUndergroundLayer}></Grid>
                <Grid
                  item
                  className={classes.InvestmentBankingDiv2}
                  xs={12}
                  md={10}
                >
                  <Grid xs={12} md={4}>
                    <img
                      src={BureauLogo}
                      alt="Bureau pic"
                      className={classes.contentBigImg}
                    />
                  </Grid>
                  <Grid xs={12} md={8} className={classes.contents}>
                    <Typography className={classes.contentTypography}>
                      Our Bureau De Change business is tailored to meet the
                      needs of our clients, need for speed and convenience. We
                      are regulated by the CBN and we facilitate foreign
                      currency trade and transfers to and on behalf of our
                      customers, we keep evolving and find more ways to solve
                      our customer foreign currency needs in an innovative way.
                    </Typography>
                    <Grid className={classes.contentSmailImgDiv}>
                      <img
                        src={IbdcLogo}
                        alt="iBDC"
                        className={classes.contentSmailImage}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid className={classes.contentBody3}>
            <div>
              <Grid style={{ marginLeft: "20px", color: "#131747" }}>
                <Typography variant="h6" style={{ width: "100%" }}>
                  <strong>Products</strong>
                </Typography>
              </Grid>
              <Grid container style={{ position: "relative" }}>
                <Grid className={classes.productsUndergroundLayer}></Grid>
                <Grid
                  item
                  className={classes.InvestmentBankingDiv}
                  xs={12}
                  md={10}
                >
                  <Grid xs={12} md={4}>
                    <img
                      src={ProductsImage}
                      alt="ProductsImage"
                      className={classes.contentBigImg}
                    />
                  </Grid>
                  <Grid xs={12} md={8} className={classes.contents}>
                    <Typography className={classes.contentTypography}>
                      We are constantly innovating to provide the best finacial
                      products in the market. Our current product offerings
                      range from loans to savings and payments. The financial
                      market in Africa is largely emerging and we are designing
                      solutions for the next 100 million users.
                    </Typography>
                    <Grid className={classes.contentSmailImgDiv}>
                      <img
                        src={instantCashLogo}
                        alt="InstantCash-Logo"
                        className={classes.contentSmailImage}
                      />
                      <img
                        src={MonieTreeLogo}
                        alt="MonieTree-Logo"
                        className={classes.contentSmailImage}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={10} sm={8} md={5} className={classes.getStarted}>
            <Grid style={{ padding: "2rem" }}>
              <Typography variant="h6" style={{ color: "#6E6E6E" }}>
                You can become a Canary customer today
              </Typography>
            </Grid>
            <Grid style={{ padding: "0rem 2rem 3rem 2rem" }}>
              <a href="/#" className="get-started-btn">
                Get Started
              </a>
            </Grid>
          </Grid>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default WhatWeDo;
