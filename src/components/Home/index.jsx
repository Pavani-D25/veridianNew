import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      {/* Left Background Image */}
      <img
        src="/home-leftbg.png"
        alt="Left Background"
        className={classes.leftBackground}
      />

      {/* Right Background Image */}
      <img
        src="/home-rightbg.png"
        alt="Right Background"
        className={classes.rightBackground}
      />

      {/* Highlighted Text */}
      <Button style={{ backgroundColor: "#f9c300", borderRadius: "0" }}>
        <Typography className={classes.highlightText}>
          INVESTMENT MANAGEMENT
        </Typography>
      </Button>

      {/* Main Heading */}
      <Typography fontFamily="IBM Plex Serif" className={classes.mainHeading}>
        Empowering Investments with Expertise and Strategy
      </Typography>

      {/* Button */}
      <Button variant="contained" className={classes.heroButton}>
        know more
        <img className={classes.arrowHero}
          src="/arrow-hero.png  "
          alt="Arrow Hero"
          style={{ marginLeft: "8px", width: "20px", height: "20px" }}
        />
      </Button>
    </Box>
  );
};

export default Home;
