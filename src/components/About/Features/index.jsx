






// import React from "react";
// import { Grid, Card, Typography, Box } from "@mui/material";
// import useStyles from "./styles";
// import cardData from "./cardData.json";

// const Features = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.root}>
//       <Grid container spacing={4} className={classes.grid}>
//         {cardData.map((item, index) => (
//           <Grid item xs={12} sm={6} key={index} className={classes.gridItem}>
//             {/* Each card */}
//             <Card className={classes.card}>
//               <Box className={classes.content}>
//                 <Typography className={classes.title}>{item.title}</Typography>
//                 <Typography className={classes.description}>
//                   {item.description}
//                 </Typography>
//               </Box>
//               <img src={item.icon} alt={item.title} className={classes.icon} />
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Features;




// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????













import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import useStyles from "./styles";
import cardData from "./cardData.json";

const Features = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={4} className={classes.grid}>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index} className={classes.gridItem}>
            {/* Each card */}
            <Card className={classes.card}>
              <Box className={classes.content}>
                <Typography className={classes.title}>{item.title}</Typography>
                <Typography className={classes.description}>
                  {item.description}
                </Typography>
              </Box>
              <img src={item.icon} alt={item.title} className={classes.icon} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
