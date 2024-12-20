



// import React from "react";
// import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
// import useStyles from "./styles";
// import content from "./content";

// const VeridianCard = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.container}>
//       <Card className={classes.card}>
//         <Grid container alignItems="center">
//           {/* Logo Section */}
//           <Grid item xs={12} sm={2}>
//             <Box className={classes.logoContainer}>
//               <img
//                 src="/logo.png"
//                 alt="Veridian Logo"
//                 className={classes.logo}
//               />
//             </Box>
//           </Grid>

//           {/* Content Section */}
//           <Grid item xs={12} sm={10}>
//             <CardContent className={classes.textContainer}>
//               {content.description.map((paragraph, index) => (
//                 <Typography
//                   key={index}
//                   variant="body1"
//                   className={classes.description}
//                 >
//                   {paragraph}
                  
//                 </Typography>
//               ))}
//             </CardContent>
//           </Grid>
//         </Grid>
//       </Card>
//      </Box>
     
//   );
// };

// export default VeridianCard;














































import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import useStyles from "./styles";
import content from "./content";

const VeridianGrid = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container className={classes.gridContainer} alignItems="center">
        {/* Logo Section */}
        <Grid item xs={12} sm={2} className={classes.logoContainer}>
          <img
            src="/logo.png"
            alt="Veridian Logo"
            className={classes.logo}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} sm={10} className={classes.textContainer}>
          {content.description.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              className={classes.description}
            >
              {paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default VeridianGrid;
