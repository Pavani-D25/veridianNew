import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes"; 
import Navbar from "./components/Navbar";
import CopyrightFooter from "./components/CopyRights";


import "@fortawesome/fontawesome-free/css/all.min.css";

import Layout from "./layout";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Layout>
        <AppRoutes />
      </Layout>
      <CopyrightFooter/>


    </Router>
  );
};

export default App;




