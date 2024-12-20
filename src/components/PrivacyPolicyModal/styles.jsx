























import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    overflow: "hidden",
    position: "fixed", 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999, 
     background: "linear-gradient(to bottom,rgb(231, 255, 248),rgb(6, 108, 76))",

  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "18px",
    maxWidth: "870px",
    width: "100%",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    outline: "none",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid #cacfdb",
    padding: "14px",
  },
  logo: {
    height: "100px",
    width: "100px",
    paddingLeft: "5px",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "590 !important",
    fontSize: "1.5rem !important",
    color: "#11423f",
    marginBottom: "30px !important",
  },
  leftAlign: {
    textAlign: "left",
  },
  closeButton: {
    cursor: "pointer",
  },
  closeIcon: {
    width: "30px !important",
    height: "30px !important",
    fontSize: "3rem",
    color: "black",
    paddingTop: "20px",
  },
  modalBody: {
    padding: "24px",
    backgroundColor: "#f2f4f7",
    borderBottomLeftRadius: "18px",
    borderBottomRightRadius: "18px",
    flexGrow: 1,
    overflow: "hidden",
  },
  scrollableContent: {
    maxHeight: "350px",
    overflowY: "auto",
    backgroundColor: "#ffff",
    padding: "24px",
  },
  sectionTitle: {
    fontWeight: "medium !important",
    marginBottom: "8px",
  },
  content: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "16px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9998, 
  },
});

export default useStyles;
