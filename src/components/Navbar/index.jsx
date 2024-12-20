



// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Box } from "@mui/material";
// import useStyles from "./styles";

// const Navbar = () => {
//   const classes = useStyles();

//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Box className={classes.navbar}>
//       {/* Logo Section - Left */}
//       <Box className={classes.logoSection}>
//             <img src="/Veridian-Logo.png" alt="Veridian Logo" className={classes.logo} />
//       </Box>

//       {/* Navigation Tabs - Center */}
//       <Box className={classes.tabsWrapper}>
//         <Box className={classes.tabs}>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
//             }
//             onClick={() => handleScroll("home")}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
//             }
//             onClick={() => handleScroll("about")}
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/our-team"
//             className={({ isActive }) =>
//               isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
//             }
//             onClick={() => handleScroll("our-team")}
//           >
//             Our Team
//           </NavLink>
//           <NavLink
//             to="/investment"
//             className={({ isActive }) =>
//               isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
//             }
//             onClick={() => handleScroll("investment")}
//           >
//             Investment Approach
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
//             }
//             onClick={() => handleScroll("contact")}
//           >
//             Contact Us
//           </NavLink>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;

// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { label: "Home", path: "/", id: "home" },
    { label: "About Us", path: "/about", id: "about" },
    { label: "Our Team", path: "/our-team", id: "our-team" },
    { label: "Investment Approach", path: "/investment", id: "investment" },
    { label: "Contact Us", path: "/contact", id: "contact" },
  ];

  return (
    <Box className={classes.navbar}>
      <Box className={classes.logoSection}>
        <img
          src="/Veridian-Logo.png"
          alt="Veridian Logo"
          className={classes.logo}
        />
      </Box>

      <Box className={classes.tabsWrapper}>
        <Box className={classes.tabs}>
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
              }
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </NavLink>
          ))}
        </Box>
      </Box>

      <Box className={classes.hamburgerMenu}>
        <IconButton className={classes.menuIconButton}>
          {!drawerOpen ? (
            <Box onClick={toggleDrawer}>
              <MenuIcon />
            </Box>
          ) : (
            <Box
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <CloseIcon />
            </Box>
          )}
        </IconButton>

        {/* <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={closeDrawer}
          classes={{ paper: classes.drawerPaper }}
          hideBackdrop={true}
       
          sx={{
            "&.MuiDrawer-root": {
              zIndex: 9,
            },
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => {
                  handleScroll(item.id);
                  setDrawerOpen(false); 
                }}
              >
                <ListItemText
                  primary={item.label}
                  className={classes.ListItemStyle}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
         */}

        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={closeDrawer}
          // classes={{ paper: classes.drawerPaper }}
          hideBackdrop={true}
          sx={{
            "&.MuiDrawer-root": {
              zIndex: 99999999,
            },
            "& .MuiDrawer-paper": {
              paddingRight: 0, 
            },
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => {
                  handleScroll(item.id);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText
                  primary={item.label}
                  className={classes.ListItemStyle}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
