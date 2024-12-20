// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   layoutContainer: {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     minHeight: "100vh", 
//     backgroundColor: theme.palette.background.default,
//   },
//   navbarPlaceholder: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1000, 
//     backgroundColor: theme.palette.secondary.main,
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   content: {
//     marginTop: "100px",
//     padding: "0 90px",
//     flex: 1,
//   },
// }));

// export default useStyles;

















import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  navbarPlaceholder: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  content: {
    marginTop: "100px",
    padding: "0 90px",
    flex: 1,
    "@media (max-width: 768px)": {
      padding: "0px 0px", // Smaller padding for mobile screens
    },
    "@media (max-width: 480px)": {
      padding: "0", // No padding for very small screens
    },
  },
}));

export default useStyles;
