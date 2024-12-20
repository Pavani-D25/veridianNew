// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "../components/Home";
// import About from "../components/About";
// import OurTeam from "../components/OurTeam";
// import InvestmentApproach from "../components/InvestmentApproach";
// import Contact from "../components/Contact";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/our-team" element={<OurTeam />} />
//       <Route path="/investment" element={<InvestmentApproach />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

// ???????????????????????????????????????????????????????????????????????????

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "../components/Home";
// import About from "../components/About";
// import OurTeam from "../components/OurTeam";
// import InvestmentApproach from "../components/InvestmentApproach";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import PrivacyPolicyModal from "../components/PrivacyPolicyModal";

// const AppRoutes = () => {
//   return (
//     <div>
//       <Routes>
//         {/* <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/our-team" element={<OurTeam />} />
//         <Route path="/investment" element={<InvestmentApproach />} />
//         <Route path="/contact" element={<Contact />} />
//          */}
//         <Route path="/privacy-policy" element={<PrivacyPolicyModal />} />
//       </Routes>

//       <div id="home" style={{ height: "80vh" }}>
//         <Home />
//       </div>
//       <div
//         id="about"
//         style={{ height: "115vh", backgroundColor: "#d9efe9" }}
//       >
//         <About />
//       </div>
//       <div
//         id="our-team"
//         style={{ height: "75vh", backgroundColor: "#d9efe9" }}
//       >
//         <OurTeam />
//       </div>
//       <div
//         id="investment"
//         style={{ height: "110vh", backgroundColor: "#d9efe9" }}
//       >
//         <InvestmentApproach />
//       </div>
//       <div id="contact" style={{ height: "50vh" }}>
//         <Contact />
//       </div>
//     </div>
//   );
// };

// export default AppRoutes;

























// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????






import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import OurTeam from "../components/OurTeam";
import InvestmentApproach from "../components/InvestmentApproach";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PrivacyPolicyModal from "../components/PrivacyPolicyModal";

const AppRoutes = () => {

  const isMobile = window.innerWidth <= 768;

  

  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/investment" element={<InvestmentApproach />} />
        <Route path="/contact" element={<Contact />} />
         */}
        <Route path="/privacy-policy" element={<PrivacyPolicyModal />} />
      </Routes>

      {/* Sections with responsive height */}
      <div
        id="home"
        style={{
          height: isMobile ? "660px" : "80vh",
        }}
      >
        <Home />
      </div>
     
      <div
        id="about"
        style={{
          height: isMobile ? "270vh" : "115vh",
          // height: isMobile ? "330vh" : "115vh",
          backgroundColor: "#d9efe9",
          marginLeft: isMobile ? "-10px" : "0", 
          marginRight: isMobile ? "-10px" : "0", 
        }}
      >
        <About />
      </div>

      <div
        id="our-team"
        style={{
          height: isMobile ? "150vh" : "75vh",
          // height: isMobile ? "170vh" : "75vh",
          backgroundColor: "#d9efe9",
          marginLeft: isMobile ? "-10px" : "0", 
          marginRight: isMobile ? "-10px" : "0",
        }}
      >
        <OurTeam />
      </div>
      <div
        id="investment"
        style={{
          height: isMobile ? "103vh" : "112vh",
          // height: isMobile ? "130vh" : "112vh",
          backgroundColor: "#d9efe9",
          marginLeft: isMobile ? "-10px" : "0", 
          marginRight: isMobile ? "-10px" : "0",
        }}
      >
        <InvestmentApproach />
      </div>
      <div
        id="contact"
        style={{
          height: isMobile ? "42vh" : "50vh",
          // height: isMobile ? "48vh" : "50vh",
          marginLeft: isMobile ? "-10px" : "0", 
          marginRight: isMobile ? "-10px" : "0",
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default AppRoutes;
