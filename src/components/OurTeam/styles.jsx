// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     position: "relative", // Ensures the navigation buttons are positioned absolutely within this container
//   },
//   headingContainer: {
//     textAlign: "center",
//     marginBottom: theme.spacing(3),
//   },
//   heading: {
//     fontWeight: "bold",
//     fontFamily: "IBM Plex Sans, sans-serif",
//     color: "#333",
//   },
//   customNavigation: {
//     position: "absolute",
//     top: "50%",
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     transform: "translateY(-50%)",
//   },
//   navButton: {
//     backgroundColor: "#000", // Arrow background color
//     borderRadius: "50%", // Circle shape
//     padding: "10px", // Size of the circle
//     color: "#fff", // Arrow color
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//   },
//   arrowIcon: {
//     fontSize: "20px", // Size of the arrow icon
//   },
// }));

// export default useStyles;




















// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     position: "relative",
//   },
//   headingContainer: {
//     textAlign: "center",
//     marginBottom: theme.spacing(3),
//   },
//   heading: {
//     fontWeight: "bold",
//     fontFamily: "IBM Plex Sans, sans-serif",
//     color: "#333",
//   },
//   customNavigation: {
//     position: "absolute",
//     top: "50%",
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     transform: "translateY(-50%)",
//   },
//   navButton: {
//     backgroundColor: "#000",
//     borderRadius: "50%",
//     padding: "10px",
//     color: "#fff",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//   },
//   arrowIcon: {
//     fontSize: "20px",
//   },
//   customPagination: {
//     // marginTop:"50px !important",
//     "& .swiper-pagination-bullet": {
//       backgroundColor: "#006c5b",
//       width: "12px",
//       height: "12px",
//       opacity: 1,
//       margin: "0px 5px  !important",

//     },
//     "& .swiper-pagination-bullet-active": {
//       backgroundColor: "#e4d317",
//       width: "24px",
//       borderRadius: "20px",
//     },
//   },
// }));

// export default useStyles;





































import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0rem",
    
  },
  customPagination: {
    position: "relative",
    // bottom: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
    "& .swiper-pagination-bullet": {
      backgroundColor: "#006c5b",
      width: "10px",
      height: "10px",
      opacity: 1,
      margin: "0px 5px  !important",
    },
    "& .swiper-pagination-bullet-active": {
      backgroundColor: "#e4d317",
      width: "24px",
      borderRadius: "20px",
      
    },
    "& .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal":
      {
        bottom: "2px",
        top: "auto",
        left: 0,
        width: "100%",
      },
  },

  customNav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    backgroundColor: "#11423f",
    color: "#fff",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
  prevBtn: {
    left: "20px",
    height: "55px",
    width: "55px",
    borderRadius: "50px 50px",
  },
  nextBtn: {
    right: "20px",
    height: "55px",
    width: "55px",
    borderRadius: "50px 50px",
  },
  
}));

export default useStyles;
