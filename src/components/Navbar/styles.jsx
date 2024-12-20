// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   navbar: {
//     display: "flex",
//     alignItems: "center",
//     padding: "7px 20px",
//     backgroundColor: "#ffff",
//     borderBottom: "2px solid #ddd",
//     position: "fixed",
//     width: "100%",
//     zIndex: 1000,
//     margin: "-8px",
//   },
//   logoSection: {
//     display: "flex",
//     alignItems: "center",
//     flex: "0 0 auto",
//   },
//   logo: {
//     height: "100px",
//     paddingLeft: "70px",
//   },
//   tabsWrapper: {
//     paddingLeft: "300px",
//     display: "flex",
//     justifyContent: "center",
//   },
//   tabs: {
//     display: "flex",
//     gap: "30px",
//   },
//   tab: {
//     textDecoration: "none",
//     fontFamily: "IBM Plex Serif",
//     color: "#51585E",
//     fontSize: "18px",
//     fontWeight: "500",
//     "&:hover": {
//       color: "#006547",
//     },
//   },
//   activeTab: {
//     paddingBottom: "5px",
//     borderBottom: "4px solid #006547",
//     color: "#006547",
//   },
// });

// export default useStyles;



































































import { makeStyles } from "@mui/styles";
import { margin, width } from "@mui/system";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    padding: "7px 20px",
    backgroundColor: "#ffff",
    borderBottom: "2px solid #ddd",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    margin: "-8px",
    // boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    "@media (max-width: 768px)": {
      margin: "-8px",
      zIndex: 1000,
      width: "22%",
    },

    // "@media (max-width: 320px)": {

    //   margin: "-8px",
    //   zIndex: 1000,
    //   width: "100%",
    //   backgroundColor:"black"
    // },
    
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    flex: "0 0 auto",
  },
  logo: {
    height: "100px",
    paddingLeft: "70px ! important",
    "@media (max-width: 768px)": {
      paddingLeft: "10px !important",
      height: "65px",
    },
  },
  tabsWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  tabs: {
    display: "flex",
    gap: "30px",
    paddingRight:"140px !important"
  },
  tab: {
    textDecoration: "none",
    fontFamily: "IBM Plex Serif",
    color: "#51585E",
    fontSize: "18px",
    fontWeight: "500",
    "&:hover": {
      color: "#006547",
    },
  },
  activeTab: {
    paddingBottom: "5px",
    borderBottom: "4px solid #006547",
    color: "#006547",
  },

  hamburgerMenu: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
      marginLeft: "220px !important",
      alignSelf: "center",
    },
    "@media (max-width: 642px)": {
      display: "block",
      marginLeft: "260px",
      alignSelf: "center",
    },

  },
  menuIconButton: {
    color: "black",
    "& svg": {
      fontSize: "30px !important",
    },
  },

  drawerPaper: {
    width: "100%",
    overlay: "none",
    position: "absolute",
    top: "80px !important",
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 999,
    height: "auto",
    boxShadow: "none !important",
    borderTop: "2px solid #ddd",
  },

  drawerBackdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  itemStyle: {
    fontFamily: "IBM Plex Sans !important",
  },
});

export default useStyles;












