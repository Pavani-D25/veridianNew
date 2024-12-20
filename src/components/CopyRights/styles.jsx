// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   footerContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "0 90px",
//     backgroundColor: "#f9f9f9",
//     borderTop: "2px solid #cacfdb",
//     color: "#5c5c5c",
//     height: "60px",
//     margin: "-8px",
//   },
//   text: {
//     fontSize: "14px",
//     color:"#717d85",
//     fontWeight: "lighter !important",
//   },
//   link: {
//     fontSize: "14px !important",
//     textDecoration: "none",
//     color: "#black !important",
//     fontFamily: "DM Sans !important",
//     "&:hover": {
//       textDecoration: "none",
//     },
//   },
// }));

// export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 90px",
    backgroundColor: "#f9f9f9",
    borderTop: "2px solid #cacfdb",
    color: "#5c5c5c",
    height: "60px",
    margin: "-8px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      padding: "10px 20px",
      textAlign: "center",
      gap: "8px",
    },
  },
  text: {
    fontSize: "14px",
    color: "#717d85",
    fontWeight: "lighter !important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4px",
      textAlign: "left",
      fontSize: "13px !important",
    },
  },
  link: {
    fontSize: "14px !important",
    textDecoration: "none",
    color: "#017d58 !important",
    fontFamily: "DM Sans !important",
    "&:hover": {
      // textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "4px",
      textAlign: "left",
    },
  },
}));

export default useStyles;
