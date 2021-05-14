import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Images } from "../shared/themes";
import Container from "@material-ui/core/Container";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  footerHeader: {
    color: "#FFFFFF",
    fontSize: "16px",
    paddingTop: "50px",
    paddingBottom: "20px",
    textTransform: "uppercase",
  },
  footerText: {
    paddingTop: "12px",
    fontSize: "14px",
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0",
      fontSize: "14px",
    },
  },

  logoStyles: {
    maxWidth: "250px",
    paddingTop: "30px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "120px",
      paddingLeft: "4px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "180px",
      paddingLeft: "14px",
    },
  },
  socialIcons: {
    color: "white",
    paddingTop: "50px",
  },
  contactIcons: {
    paddingRight: "12px",
    fontSize: "32px",
    // paddingTop: "16px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          background: "#131747",
          height: "auto",
          paddingBottom: "30px",
        }}
      >
        <Grid container justify="space-between" alignItems="center">
          <Container className={classes.containerStyles}>
            <Grid item md={2} xs={12}>
              <img
                src={Images.completeLogo}
                alt="Logo"
                className={classes.logoStyles}
              />
              <Box className={classes.footerText}>
                We're leveraging technology to build the best solutions to your
                financial problem
              </Box>
              <div className={classes.socialIcons}>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
              </div>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box className={classes.footerHeader}>SUBSIDIARIES</Box>
              <Box className={classes.footerText}>Sebastian BDC</Box>
              <Box className={classes.footerText}>Swift&Allied Partners</Box>
              <Box className={classes.footerText}>Assets Microfinance Bank</Box>
              <Box className={classes.footerText}>Nairagram</Box>
              <Box className={classes.footerText}>Instant Cash</Box>
              <Box className={classes.footerText}>monieTree</Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box className={classes.footerHeader}>MEDIA</Box>
              <Box className={classes.footerText}>Blog</Box>
              <Box className={classes.footerText}>Blog</Box>
              <Box className={classes.footerText}>Events</Box>
              <Box className={classes.footerText}>Gallery</Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box className={classes.footerHeader}>Company</Box>
              <Box className={classes.footerText}>About</Box>
              <Box className={classes.footerText}>Terms</Box>
              <Box className={classes.footerText}>Privacy Policy</Box>
              <Box className={classes.footerText}>Careers</Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box className={classes.footerHeader}>CONTACT US</Box>
              <Box className={classes.footerText}>
                <PhoneIcon className={classes.contactIcons} />
                08145515280, 01-6329480
              </Box>
              <Box className={classes.footerText}>
                <MailIcon className={classes.contactIcons} />
                info@canarypointcs.com
              </Box>
              <Box className={classes.footerText}>
                <RoomIcon className={classes.contactIcons} />
                17a Dele Adedeji Street, Off Bisola Durosinmi-Etti Street, Lekki
                Phase I -Lagos. Nigeria
              </Box>
            </Grid>
          </Container>
        </Grid>
        <Box
          style={{ textAlign: "center", paddingTop: "50px" }}
          className={classes.footerText}
        >
          Copyright © 2021 Canary Point Corporate Service
        </Box>
      </div>
    </>
  );
};

export default Footer;
