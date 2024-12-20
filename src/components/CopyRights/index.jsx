// import React from "react";
// import { Box, Typography, Link as MuiLink } from "@mui/material"; 
// import { Link } from "react-router-dom";
// import useModalStore from "../../store/modalStore";
// import useStyles from "./styles";

// const CopyrightFooter = () => {
//   const classes = useStyles();
//   const { openModal } = useModalStore();

//   return (
//     <Box className={classes.footerContainer}>
//       <Typography variant="body2" className={classes.text}>
//         {"COPYRIGHT © Veridian (Gibraltar) Limited 2024. All rights reserved. "}
//         Any and all content included on this website or incorporated by
//         reference is protected by international copyright laws.
//       </Typography>
//       <MuiLink
//         component={Link} 
//         to="/privacy-policy"
//         underline="hover"
//         className={classes.link}
//         onClick={openModal}
//       >
//         Privacy Policy
//       </MuiLink>
//     </Box>
//   );
// };

// export default CopyrightFooter;













import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import useModalStore from "../../store/modalStore";
import useStyles from "./styles";
import { useTheme } from "@mui/material/styles";

const CopyrightFooter = () => {
  const classes = useStyles();
  const { openModal } = useModalStore();
  const theme = useTheme();

  return (
    <Box
      className={classes.footerContainer}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        textAlign: { xs: "center", sm: "left" },
        gap: { xs: 1, sm: 2 }, 
        padding: 2, 
      }}
    >
      <Typography
        variant="body2"
        className={classes.text}
        sx={{ marginRight: { sm: 1 }, flex: "0 1 auto" }} 
      >
        {"COPYRIGHT © Veridian (Gibraltar) Limited 2024. All rights reserved. "}
        Any and all content included on this website or incorporated by
        reference is protected by international copyright laws.
      </Typography>
      <MuiLink
        component={Link}
        to="/privacy-policy"
        underline="hover"
        className={classes.link}
        onClick={openModal}
        sx={{
          mt: { xs: 1, sm: 0 }, // Add margin-top only on small screens
          flex: "0 1 auto", // Prevent shrinking
        }}
      >
        Privacy Policy
      </MuiLink>
    </Box>
  );
};

export default CopyrightFooter;
