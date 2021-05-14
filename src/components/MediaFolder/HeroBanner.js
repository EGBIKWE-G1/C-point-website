import Typography from "@material-ui/core/Typography";
import { Images } from "../../shared/themes";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  HeroBanner: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Images.mediaBackground})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",

    // [theme.breakpoints.down("xs")]: {
    //   height:   "400px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column",
    //   textAlign: "center",
    // },
  },
  text: {
    paddingTop: "10rem",
    width: "100%",
    textAlign: "center",
    color: "#FFFFFF",
  },
}));

const HeroBanner = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.HeroBanner}>
        <div className={classes.text}>
          <Typography variant="subtitle1" gutterBottom>
            Welcome to our
          </Typography>
          <Typography variant="h4" gutterBottom>
            Media Centre
          </Typography>
          <Typography variant="body1" gutterBottom>
            Stay updated with the latest news at Canary and the finance industry
          </Typography>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
