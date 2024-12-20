import React from "react";
import { Typography } from "@mui/material"; 
import InvestmentCard from "./Card"; 
import styles from "./styles"; 

const InvestmentApproach = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h4" style={styles.heading}>
        Holistic Investment Approach
      </Typography>

      <InvestmentCard />
    </div>
  );
};

export default InvestmentApproach; 
