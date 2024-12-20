import React, { useEffect, useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom"; 
import useModalStore from "../../store/modalStore";
import useStyles from "./styles";
import privacyPolicyContent from "./policy.json";

const PrivacyPolicyModal = () => {
  const { isOpen, closeModal } = useModalStore();
  const classes = useStyles();
  const [content, setContent] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Set content when the modal is open
    if (isOpen) {
      setContent(privacyPolicyContent);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Function to handle the close action and navigate to /home
  const handleClose = () => {
    closeModal(); 
    navigate("/home"); 
  };

  return (
    <>
      {/* Custom Modal Overlay */}
      <div className={classes.overlay} onClick={handleClose}></div>

      {/* Custom Modal Container */}
      <Box className={classes.modal}>
        <Box className={classes.modalContent}>
          {/* Header */}
          <Box className={classes.modalHeader}>
            <img
              src="/Veridian-Logo.png"
              alt="Veridian Logo"
              className={classes.logo}
            />
            <IconButton onClick={handleClose} className={classes.closeButton}>
              <CloseIcon className={classes.closeIcon} />
            </IconButton>
          </Box>

          {/* Body */}
          <Box className={classes.modalBody}>
            {content && (
              <>
                <Typography
                  variant="h5"
                  className={`${classes.title} ${classes.leftAlign}`}
                >
                  {content.title}
                </Typography>

                <Box className={classes.scrollableContent}>
                  {content.sections.map((section, index) => (
                    <div key={index}>
                      <Typography variant="h6" className={classes.sectionTitle}>
                        <strong>{section.heading}</strong>
                      </Typography>
                      {section.content.map((paragraph, idx) => (
                        <Typography
                          key={idx}
                          variant="body1"
                          className={classes.content}
                        >
                          {paragraph.text}
                        </Typography>
                      ))}
                    </div>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicyModal;
