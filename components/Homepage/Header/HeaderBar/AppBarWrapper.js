import * as React from "react";
import { useState } from "react";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import TBCLogo from "./TBCGuidesHeaderLogo/TBCLogo";
import CompressedTBCLogo from "./TBCGuidesHeaderLogo/CompressedTBCLogo";
import DrawerWrapper from "../Drawer/DrawerWrapper";
import HamburgerWrapper from "../Drawer/HamburgerWrapper";
import HeaderBarPageButtons from "./HeaderBarPageButtons";

import WelcomeTextHeader from "../Background/WelcomeTextHeader";

const AppBarWrapper = ( {pages, colorOne, colorTwo}) => {

  const [isOpen, setOpen] = useState(false);
  
  return (
    <Box mt={3} ml={{ xs: 2, md: 6 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
       
          <Toolbar disableGutters >
            {/* Desktop View Logo */}
            <TBCLogo />

            {/* Drawer View Logo */}
            <CompressedTBCLogo />

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {/* Drawer View Hamburger Icon */}
              <HamburgerWrapper
                isOpen={isOpen}
                setOpen={setOpen}
                colorOne={colorOne}
                colorTwo={colorTwo}
              />

              {/* Drawer View Buttons */}
              <DrawerWrapper isOpen={isOpen} pages={pages} />
            </Box>

            {/* Desktop View Buttons */}
            <HeaderBarPageButtons pages={pages} position="flex-end" />
          </Toolbar>
        
      </AppBar>
    </Box>
  );
};

export default AppBarWrapper;


