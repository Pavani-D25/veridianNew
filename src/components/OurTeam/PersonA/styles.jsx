// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "0rem",
//     backgroundColor: "none",

//   },
//   parallelogram: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     background: theme.palette.secondary.main,
//     clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//     padding: "1rem 8rem 0rem 4rem ",
//     width: "88% !important",
//     height:"407px !important",
//     overflow: "hidden",
//     backgroundColor: theme.palette.secondary.main,

//   },
//   imageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   },
//   imageWrapper: {
//     position: "relative",
//     display: "inline-block",
//     zIndex: 2,
//   },
//   image: {
//     maxWidth: "100%",
//     borderRadius: "8px",
//     position: "relative",
//     zIndex: 3,
//     top: "15px",

//   },
//   nameParallelogram: {
//     position: "absolute",
//     bottom: "5%",
//     right: "-110%",
//     background: theme.palette.primary.main,
//     clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
//     padding: "0.5rem 1rem",
//     color: theme.palette.secondary.main,
//     fontWeight: theme.typography.h6.fontWeight,
//     textTransform: theme.typography.h6.textTransform,
//     fontSize: "12px !important",
//     height: "52px",
//     width: "354px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//     zIndex: 1,
//   },
//   nameText: {
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "center",
//     height: "100%",
//     paddingRight: "40px",
//     color: theme.palette.secondary.main,
//     fontFamily: "IBM Plex Sans !important",
//     fontSize: "16px !important",
//     fontWeight: theme.typography.h6.fontWeight,
//   },
//   textContainer: {
//     top: "0px",
//     color: theme.palette.primary.dark,
//     marginBottom: "8rem !important",
//   },
//   description: {
//     lineHeight: 1.8,
//     fontSize: "14px !important",
//     color: "#717b85",
//     paddingRight: "40px !important",
//     marginBottom: "0.5rem !important",

//   },
//   extraInfo: {
//     lineHeight: 1.6,
//     fontSize: "14px !important",
//     color: "#717b85",
//     paddingRight: "40px !important",
//   },
// }));

// export default useStyles;












































import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0rem",
    backgroundColor: "none",
  },
  parallelogram: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.secondary.main,
    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "1rem 8rem 0rem 4rem",
    width: "88% !important",
    height: "407px !important",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", 
      clipPath: "none", 
      height: "auto",
      padding: "1rem",
      width: "100%",
      height: "1007px !important",
      textAlign: "right !important",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem", 
    },
  },
  imageWrapper: {
    position: "relative",
    display: "inline-block",
    zIndex: 2,
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
    position: "relative",
    zIndex: 3,
    top: "15px",
    [theme.breakpoints.down("sm")]: {
      top: "0", 
    },
  },
  nameParallelogram: {
    position: "absolute",
    bottom: "5%",
    right: "-110%",
    background: theme.palette.primary.main,
    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
    padding: "0.5rem 1rem",
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.h6.fontWeight,
    fontSize: "12px !important",
    height: "52px",
    width: "354px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      bottom: "5px",
      right: "0",
      clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
      width: "80%",
      textAlign: "center", 
      marginBottom: "1rem",

    },
  },
  nameText: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    paddingRight: "40px",
    color: theme.palette.secondary.main,
    fontFamily: "IBM Plex Sans !important",
    fontSize: "16px !important",
    fontWeight: theme.typography.h6.fontWeight,
    [theme.breakpoints.down("sm","md")]: {
      justifyContent: "center", 
      paddingRight: "0",
    },
  },
  textContainer: {
    top: "0px",
    color: theme.palette.primary.dark,
    marginBottom: "8rem !important",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center", 
      marginBottom: "1rem",
    },
  },
  description: {
    lineHeight: 1.8,
    fontSize: "14px !important",
    color: "#717b85",
    paddingRight: "40px !important",
    marginBottom: "0.5rem !important",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0", 
      textAlign:"left",
    },
  },
  extraInfo: {
    lineHeight: 1.6,
    fontSize: "14px !important",
    color: "#717b85",
    paddingRight: "40px !important",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0", 
      textAlign:"left",
    },
  },
}));

export default useStyles;
