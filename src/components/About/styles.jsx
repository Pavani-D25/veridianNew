// import { makeStyles } from "@mui/styles";


// const useStyles = makeStyles((theme) => ({
//     container: {
//       padding: theme.spacing(4),
//     },
//     section: {
//       marginBottom: theme.spacing(0),
//     },
//     headingContainer: {
//         marginBottom: "30px", 
//       },
//       heading: {
//         fontWeight: "bold !important",
//         fontFamily: "IBM Plex Sans !important",
//         color: "#333",
//       },
//   }));
  
//   export default useStyles;
  







import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    "@media (max-width: 768px)": {
      marginTop:"0px",

    }
  },
  section: {
    marginBottom: theme.spacing(0), 
    "@media (max-width: 768px)": {
      padding: theme.spacing(0),
      

    }
  },
  headingContainer: {
    marginBottom: "30px",
  },
  heading: {
    fontWeight: "bold !important",
    fontFamily: "IBM Plex Sans !important",
    color: "#333",
  },
}));

export default useStyles;
