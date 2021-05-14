import background from "../../assets/images/TokeOla.png";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styles from "../Careersfolder/Careers.module.css";
import LightSpeed from "react-reveal/LightSpeed";

const useStyles = makeStyles({
  HeroBanner: {
    backgroundImage: `url(${background})`,
    height: "478px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  text: {
    width: "100%",
    maxWidth: "721px",
    color: "#FFFFFF",
  },
});

const CareersCulture = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.HeroBanner}>
        <Container>
          <div>
            <LightSpeed left>
              <h1 className={styles.careersBigText}>
                “To create excellent service, you have to value excellent people
                and processes.”
              </h1>
              <h3 className={styles.careersSmallText}>Tolu Oke</h3>
              <p className={styles.careersSmallestTest}>
                Chief Operating Officer
              </p>
            </LightSpeed>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CareersCulture;
