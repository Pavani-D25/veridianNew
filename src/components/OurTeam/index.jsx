// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import PersonA from "./PersonA";
// import PersonB from "./PersonB";
// import PersonC from "./PersonC";

// const OurTeam = () => {
//   return (
//     <Swiper
//       spaceBetween={-240}
//       slidesPerView={1}
//       // loop={true}
//       centeredSlides={true}
//       navigation
//       pagination={{ clickable: true }}
//       modules={[Navigation, Pagination]}
//     >
//       <SwiperSlide>
//         <PersonA />
//       </SwiperSlide>
//       <SwiperSlide>
//         <PersonB />
//       </SwiperSlide>
//       <SwiperSlide>
//         <PersonC />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default OurTeam;
























// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Box, Typography } from "@mui/material";
//  import useStyles from "./styles";

// import PersonA from "./PersonA";
// import PersonB from "./PersonB";
// import PersonC from "./PersonC";

// const OurTeam = () => {
//     const classes = useStyles();



//   return (
//     <Box>
//       {/* Centered Heading */}
//       <Box sx={{ textAlign: "center", marginBottom: 3 }}>
//         <Typography variant="h4" fontWeight="bold" fontFamily={"IBM Plex Sans !important"}>
//           Our Team
//         </Typography>
//       </Box>

//       {/* Swiper for Team Members */}
//       <Swiper
//         spaceBetween={-240}
//         slidesPerView={1}
//         centeredSlides={true}
//         navigation
//         pagination={{ clickable: true }}
//         modules={[Navigation, Pagination]}
//      className={classes.customPagination} // Custom class for styling

//       >
//         <SwiperSlide>
//           <PersonA />
//         </SwiperSlide>
//         <SwiperSlide>
//           <PersonB />
//         </SwiperSlide>
//         <SwiperSlide>
//           <PersonC />
//         </SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// };

// export default OurTeam;
























import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import PersonA from "./PersonA";
import PersonB from "./PersonB";
import PersonC from "./PersonC";
import useStyles from "./styles";

const OurTeam = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const swiperNavPrev = useRef(null);
  const swiperNavNext = useRef(null);

  return (
    <Box className={classes.container}>
      <Box sx={{ textAlign: "center", marginBottom: 3 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          fontFamily="IBM Plex Sans, sans-serif"
        >
          Our Team
        </Typography>
      </Box>

      <Box position="relative">
        {/* Custom Navigation Buttons - Hidden on Mobile */}
        {!isMobile && (
          <>
            <button
              ref={swiperNavPrev}
              className={`${classes.customNav} ${classes.prevBtn}`}
            >
              <HiArrowNarrowLeft style={{ fontSize: "22px" ,  marginTop:"5px"}} />
            </button>
            <button
              ref={swiperNavNext}
              className={`${classes.customNav} ${classes.nextBtn}`}
            >
              <HiArrowNarrowRight style={{ fontSize: "22px" , marginTop:"5px"}} />
            </button>
          </>
        )}

        {/* Swiper Component */}
        <Swiper
          spaceBetween={isMobile ? 30 : -240}
          slidesPerView={1}
          centeredSlides={true}
          navigation={{
            prevEl: swiperNavPrev.current,
            nextEl: swiperNavNext.current,
          }}
          pagination={isMobile ? { clickable: true } : false}
          className={classes.customPagination}

          modules={[Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrev.current;
            swiper.params.navigation.nextEl = swiperNavNext.current;
          }}
        >
          <SwiperSlide>
            <PersonA />
          </SwiperSlide>
          <SwiperSlide>
            <PersonB />
          </SwiperSlide>
          <SwiperSlide>
            <PersonC />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;
