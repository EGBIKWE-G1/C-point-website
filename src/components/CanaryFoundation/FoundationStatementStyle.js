const FoundationStatementStyle = (theme) => ({
  root: {
    flexGrow: 1,
    color: "#6E6E6E",
    height: "100%",
    fontWeight: 400,
  },
  headerBackgroungImg: {
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "15rem",
  },
  headerTextBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    background: "transparent",
  },
  headerHeadline: {
    lineHeight: "23px",
    letterSpacing: "o.33px",
    color: "#FFFFFF",
    borderTop: "none",
    fontSize: "2.8rem",
    fontWeight: 600,
    // fontFamily: "Gotham Rounded",
    //   src: `
    //   local('Gotham Rounded),
    //   local('GothamRounded-Medium),
    //   url(${GothamRounded2}) format('otf')
    // `,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  headlineContentTypo: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: 0.4,
    padding: "3rem",
    color: "#ffffff",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      padding: "0",
    },
  },
  undergroundLayer: {
    width: "250px",
    height: "140px",
    backgroundColor: "#F6A71B",
    background: "#F6A71B",
    borderRadius: "25px",
  },
  MicrofinanceUndergroundLayer: {
    position: "absolute",
    top: "29px",
    right: "0px",
    width: "280px",
    height: "140px",
    backgroundColor: "#20B8EB",
    background: "#20B8EB",
    borderRadius: "25px",
  },
  BureauUndergroundLayer: {
    position: "absolute",
    top: "29px",
    right: "0px",
    width: "250px",
    height: "140px",
    backgroundColor: "#E06C26",
    background: "#E06C26",
    borderRadius: "25px",
  },
  remittanceUndergroundLayer: {
    width: "160px",
    height: "100px",
    backgroundColor: "#2D3690",
    background: "#2D3690",
    borderRadius: "25px",
  },
  productsUndergroundLayer: {
    width: "150px",
    height: "100px",
    backgroundColor: "#4F88C7",
    background: "#4F88C7",
    borderRadius: "25px",
  },

  contentBody: {
    position: "relative",
    height: "400px",
    [theme.breakpoints.down("xs")]: {
      height: "785px",
      marginTop: "2rem",
    },
    [theme.breakpoints.up("sm")]: {
      height: "600px",
      marginTop: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "row",
      height: "444px",
      // marginTop: "4rem",
    },
    [theme.breakpoints.only("lg")]: {
      flexDirection: "row",
      height: "370px",
      marginTop: "3rem",
      marginBottom: "2rem",
    },
  },
  contentBody2: {
    position: "relative",
    height: "330px",
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      height: "600px",
      marginTop: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "430px",
      marginTop: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "row",
      height: "330px",
      marginTop: "4rem",
    },
    [theme.breakpoints.only("lg")]: {
      flexDirection: "row",
      height: "370px",
      marginTop: "3rem",
      marginBottom: "2rem",
    },
  },
  contentBody3: {
    position: "relative",
    height: "400px",
    [theme.breakpoints.down("xs")]: {
      height: "640px",
      marginTop: "2rem",
      marginBottom: "8rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "460px",
      marginTop: "4rem",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "row",
      height: "380px",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      height: "370px",
      marginTop: "3rem",
      marginBottom: "2rem",
    },
  },
  InvestmentBankingDiv: {
    border: "2px solid #4F88C7",
    position: "absolute",
    top: "20px",
    left: "20px",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    padding: "0",
    backgroundColor: "#ffffff",
    "@media (min-width:600px)": {
      flexDirection: "row",
      padding: "2rem 0 2rem 2rem",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  InvestmentBankingDiv2: {
    border: "2px solid #4F88C7",
    position: "absolute",
    top: "45px",
    right: "25px",
    display: "flex",
    flexDirection: "column",
    padding: "0",
    backgroundColor: "#ffffff",
    "@media (min-width:600px)": {
      flexDirection: "row",
      padding: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  contentBigImg: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    "@media (min-width:600px)": {},
    [theme.breakpoints.down("md")]: {
      padding: "10px 16px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "300px",
    },
  },
  contents: {
    margin: "0 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      margin: "0 2rem 2rem",
    },
  },
  contentTypography: {
    textAlign: "left",
    fontSize: "18px",
    fontWeight: 400,
    color: "#6E6E6E",
    lineHeight: "29px",
    letterSpacing: "o.33px",
    "@media (min-width:600px)": {},
    [theme.breakpoints.down("md")]: {
      padding: "22px 0px",
    },
  },
  contentSmailImgDiv: {
    width: "140px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  contentSmailImage: {
    width: "100%",
    padding: "2px 16px",
    boxShadow:
      "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);",
  },
  boldTypeHeadline: {
    fontWeight: 800,
  },
  getStarted: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#FEFEFE",
    border: "1px solid #E7E7E7",
    [theme.breakpoints.down("xs")]: {
      margin: "72px auto 24px",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "4rem auto 24px",
    },
    [theme.breakpoints.only("md")]: {
      margin: "3rem auto 24px",
    },
  },
});

export default FoundationStatementStyle;
