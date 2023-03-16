import * as React from "react";
import { useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import TBCLogo from "./TBCGuidesHeaderLogo/TBCLogo";
import CompressedTBCLogo from "./TBCGuidesHeaderLogo/CompressedTBCLogo";
import DrawerWrapper from "../Drawer/DrawerWrapper";
import HamburgerWrapper from "../Drawer/HamburgerWrapper";
import HeaderBarPageButtons from "./HeaderBarPageButtons";

const AppBarWrapper = ( {pages, colorOne, colorTwo}) => {

  const [isOpen, setOpen] = useState(false);
  
  return (
    <Box mt={5} ml={{ xs: 4, md: 8 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar disableGutters>
          {/* Desktop View Logo */}
          <TBCLogo pages={pages} />

          {/* Drawer View Logo */}
          <CompressedTBCLogo pages={pages} />

          <Box sx={{ display: { xs: "flex", lg: "none" } }} mr={2}>
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


