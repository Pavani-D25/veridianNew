


// 

// import React from "react";
// import { Box, Typography, useMediaQuery ,useTheme} from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation ,Pagination} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination"; 

// import useStyles from "./styles";
// import data from "./data";


// const InvestmentCard = () => {
//   const classes = useStyles();
//   const theme = useTheme();
  
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box className={classes.container}>
//       {isSmallScreen ? (
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={false}
//           navigation
//           pagination={isSmallScreen ? { clickable: true } : false} 
//           className={classes.customPagination}
//           modules={[Navigation,Pagination]}
//         >
//           {data.cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <Box className={classes.card}>
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className={classes.image}
//                 />
//                 <Typography variant="h6" className={classes.title}>
//                   {card.title}
//                 </Typography>
//                 {card.description.split("\n").map((paragraph, i) => (
//                   <Typography
//                     key={i}
//                     variant="body1"
//                     className={classes.description}
//                   >
//                     {paragraph}
//                   </Typography>
//                 ))}
//               </Box>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         data.cards.map((card, index) => (
//           <Box key={index} className={classes.card}>
//             <img src={card.image} alt={card.title} className={classes.image} />
//             <Typography variant="h6" className={classes.title}>
//               {card.title}
//             </Typography>
//             {card.description.split("\n").map((paragraph, i) => (
//               <Typography
//                 key={i}
//                 variant="body1"
//                 className={classes.description}
//               >
//                 {paragraph}
//               </Typography>
//             ))}
//           </Box>
//         ))
//       )}
//     </Box>
//   );
// };

// export default InvestmentCard;




























import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";  

import useStyles from "./styles";
import data from "./data";      

const InvestmentCard = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.container}>
      {isSmallScreen ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          navigation={!isSmallScreen}            
          pagination={isSmallScreen ? { clickable: true } : false} 
          modules={[Navigation, Pagination]}  
          className={classes.customPagination}
        >
          {data.cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Box className={classes.card}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={classes.image}
                />
                <Typography variant="h6" className={classes.title}>
                  {card.title}
                </Typography>
                {card.description.split("\n").map((paragraph, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    className={classes.description}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        data.cards.map((card, index) => (
          <Box key={index} className={classes.card}>
            <img src={card.image} alt={card.title} className={classes.image} />
            <Typography variant="h6" className={classes.title}>
              {card.title}
            </Typography>
            {card.description.split("\n").map((paragraph, i) => (
              <Typography
                key={i}
                variant="body1"
                className={classes.description}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        ))
      )}
    </Box>
  );
};

export default InvestmentCard;













