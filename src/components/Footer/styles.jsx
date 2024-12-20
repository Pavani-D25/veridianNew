import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textAlign: "center",
    padding: "40px 20px",
    position: "relative",
    overflow: "hidden",
    height: "200px",
    "&::before": {
      content: '""',
      position: "absolute",
      backgroundImage: "url(public/footer-left.png)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "360px",
      height: "360px",
      top: "0",
      left: "0",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      backgroundImage: "url(public/footer-right.png)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "360px",
      height: "360px",
      bottom: "0",
      right: "0",
      top: "0",
    },
    [theme.breakpoints.down("sm")]: {
      "&::before, &::after": {
        display: "none",
      },
      height: "auto", 
    },
  },
  title: {
    fontWeight: "bolder !important",
    fontSize: "32px !important",
    marginBottom: "10px",
    fontFamily: "IBM Plex Sans !important",
  },
  subtitle: {
    fontSize: "14px !important",
    marginBottom: "20px !important",
    wordSpacing: "2px",
    fontWeight: "200 !important",
    color: theme.palette.secondary.main,
  },
  emailSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    borderRadius: "0px !important",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "90%",
      marginLeft: "15px !important",
    },
  },
  mailButton: {
    backgroundColor: "#e0b120 !important",
    color: "black !important",
    fontSize: "13px !important",
    padding: "10px 15px",
    borderRadius: "0px !important",
    fontWeight: "bold !important",
    marginRight: "10px !important",
    "&:hover": {},
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px",
    },
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    borderRadius: "0px !important",

    [theme.breakpoints.down("sm")]: {
      width: "100%", // Full width on mobile
    },
  },
  emailBox: {
    backgroundColor: "#006547",
    height: "40px",
    padding: "10px 20px",
    borderRadius: "0px !important",
    width: "300px",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      width: "100%", // Full width on mobile
    },
  },
  emailText: {
    color: theme.palette.secondary.main,
    fontWeight: "bolder !important",
    fontSize: "17px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px !important",
    },
  },

  arrowBox: {
    padding: "10px 0px",
    backgroundColor: "#004d40",
    borderRadius: "0 5px 5px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    borderRadius: "0px !important",
  },
  arrowIcon: {
    fontSize: "24px",
    padding: "0px",
    color: theme.palette.secondary.main,
  },
  arrowButton: {
    borderRadius: "0 5px 5px 0",
    minWidth: "50px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#004c39",
    },
  },
  footerNote: {
    fontSize: "14px",
    marginTop: "20px",
  },
}));

export default useStyles;
