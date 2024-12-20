import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Typography variant="h5" className={classes.title}>
        Contact Us
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Have questions or need more information? Reach out to us at.
      </Typography>
      <Box className={classes.emailSection}>
        <Box className={classes.inputGroup}>
          <Box className={classes.emailBox}>
            <Button className={classes.mailButton}>MAIL TO</Button>

            <Typography className={classes.emailText}>
              info@veridian.com
            </Typography>
          </Box>
          <Box className={classes.arrowBox}>
            {/* <span className={classes.arrowIcon}>&rarr;</span> */}

            <Button className={classes.arrowButton}>
              <span className={classes.arrowIcon}>&rarr;</span>
            </Button>
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" className={classes.footerNote}>
        We're here to help!
      </Typography>
    </Box>
  );
};

export default Footer;
