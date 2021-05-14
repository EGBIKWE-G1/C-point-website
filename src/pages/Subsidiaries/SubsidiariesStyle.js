const subsidiariesStyle = (theme) => ({
  root: {
    flexGrow: 1,
    color: "#6E6E6E",
    lineHeight: 1.2,
    letterSpacing: 1,
  },
  typographyH5: {
    fontSize: "36px",
    fontWeight: 400,
    color: "#2D3690",
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  typographybody1: {
    fontSize: "20px",
    fontWeight: 400,
    color: "#6E6E6E",
    lineHeight: "23px",
    letterSpacing: "o.33px",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    },
  },
  typographybody2: {
    padding: "2rem",
    fontSize: "20px",
    fontWeight: 400,
    color: "#6E6E6E",
    lineHeight: "23px",
    textAlign: "justify",
    letterSpacing: "o.33px",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    },
  },
  SubsidWrapper: {
    margin: "0 auto",
  },
  SubsidiariesHeader: {
    display: "flex",
    flexDirection: "row",
    margin: "1rem auto",
    justifyContent: "center",
    alignItems: "center",
  },
  CanaryLogo: {
    width: "170px",
    padding: "1rem",
  },
  SubsidiariesHeadGrid: {
    padding: "1rem",
  },
  SubsidLogoWrapper: {
    margin: "0 auto",
  },
  subLogosDiv: {
    display: "flex",
    flexDirection: "row",
    margin: "1rem auto",
    justifyContent: "center",
    alignItems: "center",
  },
  subLogoGrid: {
    margin: "2rem 2rem",
  },
  subLogo: {
    padding: "1rem",
    height: "120px",
    width: "120px",
    borderRadius: "50%",
    boxShadow:
      "0 5px 20px rgba(154,160,185,.20), 0 15px 40px rgba(166,173,201,.2);",
    "&:hover": {
      boxShadow: "0px 2px 13px 6px rgba(224, 108, 38, 0.309709);",
      background: "0px 2px 13px 6px rgba(224, 108, 38, 0.309709);",
    },
  },
  SebastianHeadGrid: {
    backgroundColor: "#4F88C7",
    borderRadius: "9px",
    margin: "2rem auto",
  },
  SebastianTypoText: {
    color: "#FFFFFF",
    fontSize: "28px",
    lineHeight: 1.5,
    letterSpacing: 1,
    fontWeight: 400,
    padding: theme.spacing(6),
    textAlign: "center",
  },
  SubsidWebDetails: {
    margin: "2rem auto",
  },
  SubsidDetailsGrid: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  SubsidLogoContent: {
    padding: "1rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  SubsidLogoIbdcDiv: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SubsidLogoIbdc: {
    width: "100%",
    cursor: "pointer",
  },
  buttonGrid: {
    margin: "2rem auto",
  },
  button: {
    fontSize: "1rem",
    padding: "10px 25px",
    borderRadius: "30px",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    backgroundColor:
      "linear-gradient(183.92deg, #F2A54E -38.53%, #E06C26 156.47%)",
    background: "linear-gradient(183.92deg, #F2A54E -38.53%, #E06C26 156.47%)",
    "&:hover": {
      // backgroundColor: "#FB7518",
      background: "#FB7518",
      color: "#ffffff",
    },
  },
  IbdcContent: {
    padding: "1rem",
  },
  formContainer: {
    margin: "4rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #E7E7E7",
    borderRadius: "9px",
  },
  signUpGrid: {
    margin: "3rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpTypo: {
    fontSize: "24px",
    fontWeight: "400px",
    lineHeight: 1.2,
    letterSpacing: "0.6px",
    textAlign: "center",
    padding: "auto 2rem",
  },
  formdiv: {
    display: "flex",
    width: "100%",
    padding: "2rem 3rem",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem 0",
      width: "100%",
      textAlign: "center",
    },
  },
  input: {
    width: "150%",
    padding: "16px 10px",
    border: "1px solid #979797",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: 400,
    color: "#9C9C9C",
    flexGrow: "1",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  singUpBtn: {
    position: "absolute",
    right: "50px",
    top: "32px",
    borderRadius: "0 9px 9px 0",
    border: "3px thin linear-gradient(180deg, #43DDF7 0%, #20B8EB 100%)",
    padding: "15px 36px",
    color: "white",
    background: "linear-gradient(180deg, #43DDF7 0%, #20B8EB 100%)",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem auto 0",
      position: "relative",
      right: "0",
      top: "0",
    },
  },
  companyLogoLink: {
    cursor: "pointer",
  },
});

export default subsidiariesStyle;
