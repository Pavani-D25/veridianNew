



import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import useStyles from "./styles";
import content from "./content";

const PersonC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container className={classes.parallelogram}>
        {/* Left Section: Image */}
        <Grid item xs={12} md={4} className={classes.imageContainer}>
          <div className={classes.imageWrapper}>
            <img
              src="person3.png" 
              alt={content.name}
              className={classes.image}
            />
            {/* Parallelogram for Name */}
            <div className={classes.nameParallelogram}>
              <Typography variant="h6" className={classes.nameText}>
                {content.name}
              </Typography>
            </div>
          </div>
        </Grid>

        {/* Right Section: Text */}
        <Grid item xs={12} md={8} className={classes.textContainer}>
          <Typography variant="body1" className={classes.description}>
            {content.description}
          </Typography>
          <Typography variant="body2" className={classes.extraInfo}>
            {content.extraInfo}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonC;
