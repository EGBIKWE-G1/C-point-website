import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Button,
  InputBase,
  Box,
} from "@material-ui/core";
import { Images } from "../../shared/themes";

const recentCards = [
  {
    image: `${Images.monieTree}`,
    title: "New Product Release",
    Description:
      "We are proud to announce the release of the latest savings and investment product… More",
  },
  {
    image: `${Images.amfb}`,
    title: "AMFB on the Rise",
    Description:
      "Microfinance banking has a new face. The Assests Microfinace group is seeting out with…More",
  },
  {
    image: `${Images.teamBonding}`,
    title: "Team Bonding",
    Description:
      "At Canary, we prioritize the well-being of our staff and place a high priority of company culture…More",
  },
  {
    image: `${Images.blankImage}`,
    title: "New Product Release",
    Description:
      "We are proud to announce the release of the latest savings and investment product…More",
  },
  {
    image: `${Images.blankImage}`,
    title: "New Product Release",
    Description:
      "We are proud to announce the release of the latest savings and investment product…More",
  },
  {
    image: `${Images.blankImage}`,
    title: "New Product Release",
    Description:
      "We are proud to announce the release of the latest savings and investment product…More",
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
    height: 380,
    display: "flex",
    marginTop: "3rem",
  },

  cardImage: {
    width: "100%",
    height: "180px",
    objectFit: "contain",
  },
  recentCards: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: "8px",
  },
  viewMoreBtn: {
    padding: ".5rem 3rem",
    borderRadius: "32px",
    margin: "64px",
    background: "linear-gradient(183.92deg, #F2A54E -38.53%, #E06C26 156.47%)",
    color: "#ffffff",
  },
  containerStyles: {
    padding: "5rem",
  },
  input: {
    marginLeft: "2rem",
    flex: 1,
  },
  searchContent: {
    display: "flex",
    border: "1px solid #979797",
    width: 350,
    height: "30px",
    margin: "2rem",
    justifyContent: "center",
    borderRadius: "6px",
  },
  iconButton: {
    padding: "8px 16px",
    color: "#ffffff",
    background: "linear-gradient(180deg, #43DDF7 0%, #20B8EB 100%)",
  },
  label: {
    textTransform: "initial",
  },
  newsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #979797",
    padding: "4rem",
    borderRadius: "8px",
  },
  newsText: {
    width: "100%",
    textAlign: "center",
    color: "#6E6E6E",
  },
});

const Recent = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.containerStyles}>
        <Grid container>
          <Grid item xs={12} className={classes.recentCards}>
            {recentCards.map((item) => {
              return (
                <div>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia>
                        <img
                          src={item.image}
                          alt="monieTree"
                          className={classes.cardImage}
                        />
                      </CardMedia>

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.Description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Button
                variant="contained"
                className={classes.viewMoreBtn}
                classes={{
                  label: classes.label,
                }}
              >
                View More
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.newsContainer}>
            <Grid item>
              <Typography variant="h5" className={classes.newsText}>
                Stay updated with the Canary <br /> weekly newsletter!
              </Typography>
            </Grid>
            <Grid item>
              <Box className={classes.searchContent}>
                <InputBase
                  className={classes.input}
                  // inputProps={{ "aria-label": "email address" }}
                  placeholder="email address"
                />
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.iconButton}
                  classes={{
                    label: classes.label,
                  }}
                  aria-label="email address"
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Recent;
