import React from "react";
import Container from "@material-ui/core/Container";
import styles from "../Careersfolder/Careers.module.css";
import { jointeamData, jointeamDataTwo } from "./JoinTeamData";
import LightSpeed from "react-reveal/LightSpeed";

const JoinOurTeam = () => {
  return (
    <div className={styles.jointeam}>
      <Container>
        <section>
          <div className={styles.jointeamcontainer}>
            <p className={styles.joinourteam}>
              <span>Join</span> Our <span>Team</span>
            </p>
            <LightSpeed left>
              <p className={styles.achievers}>
                We are looking for dedicated achievers across a range of
                specialties
              </p>
            </LightSpeed>
          </div>
        </section>

        <div className={styles.flexcardcontainer}>
          {jointeamData.map((teamData) => {
            const { id, vectorImage, text, cardText } = teamData;
            return (
              <div key={id} className={styles.cardourteam}>
                <div>{vectorImage}</div>
                <div style={{ marginBottom: "0" }}>{cardText}</div>
                <p
                  style={{
                    textAlign: "center",
                    padding: "1rem",
                    width: "262px",
                    lineHeight: "29px",
                    marginTop: "0",
                  }}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <section>
          <div className={styles.flexcardcontainer}>
            {jointeamDataTwo.map((teamData) => {
              const { id, vectorImage, text, cardText } = teamData;
              return (
                <div key={id} className={styles.cardourteam}>
                  <div>{vectorImage}</div>
                  <div style={{ marginBottom: "0" }}>{cardText}</div>
                  <p
                    style={{
                      textAlign: "center",
                      padding: "1rem",
                      width: "262px",
                      lineHeight: "29px",
                      marginTop: "0",
                    }}
                  >
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div style={{ paddingBottom: "4rem" }}>
          <button className={styles.availablebtn}>
            View Available Positions
          </button>
        </div>
      </Container>
    </div>
  );
};
export default JoinOurTeam;
