import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import useStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.layoutContainer}>
      <Box className={classes.navbarPlaceholder}>
      </Box>

      <Box className={classes.content}>
        {children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
