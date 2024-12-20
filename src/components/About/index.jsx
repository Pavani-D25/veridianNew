// import React from "react";
// import { Box } from "@mui/material";
// import VeridianCard from "./veridianCard";
// import Features from "./Features"; // Second component with the grid of cards
// import useStyles from "./styles"; // Custom styles

// const AboutUs = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.container}>
//       {/* Veridian Overview Card */}
      
//       <Box className={classes.section}>
//         <VeridianCard />
//       </Box>

//       {/* Features Grid */}
//       <Box className={classes.section}>
//         <Features />
//       </Box>
//     </Box>
//   );
// };

// export default AboutUs;















import React from "react";
import { Box, Typography } from "@mui/material";
import VeridianCard from "./VeridianCard";
import Features from "./Features"; 
import useStyles from "./styles"; 

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {/* Centered Heading */}
      <Box className={classes.headingContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          About Us
        </Typography>
      </Box>

      {/* Veridian Overview Card */}
      <Box className={classes.section}>
        <VeridianCard />
      </Box>

      {/* Features Grid */}
      <Box className={classes.section}>
        <Features />
      </Box>
    </Box>
  );
};

export default AboutUs;
