import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./CanaryFountionBanner.module.css";
import FoundationStatementStyle from "./FoundationStatementStyle";
import FoundationCard from "./FoundationCard";
import LightSpeed from "react-reveal/LightSpeed";
const FoundationStatement = () => {
  const useStyles = makeStyles(FoundationStatementStyle);

  const classes = useStyles();
  return (
    <div style={{ background: "white" }}>
      <Container>
        <div
          style={{ background: "white", height: "400px", position: "relative" }}
        >
          <div className={styles.foundationstatement}>
            <LightSpeed left>
              <Typography className={classes.headlineContentTypo}>
                Canary Point Corporate Services is committed to being a socially
                responsible company, looking beyond finance to meet our social
                performance objectives.
              </Typography>
            </LightSpeed>
          </div>
        </div>
        <FoundationCard />
      </Container>
    </div>
  );
};

export default FoundationStatement;
