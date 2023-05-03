import * as React from "react";
import { Box, Stack } from "@mui/material";
import BackgroundImage from "./Background/BackgroundImage";
import AppBarWrapper from "./HeaderBar/AppBarWrapper";
import WelcomeTextHeader from "./Background/WelcomeTextHeader";

const HomepageHeader = () => {
  return (
    
      <Box
        sx={{
          width: "100vw",
          position: "relative",
        }}
      >
        <BackgroundImage />

        <Stack className="homepage-header-stack" direction="column">
          <AppBarWrapper colorOne="white" colorTwo="#596d90" pages={pages} />
          <Box sx={{ bottom: 0, position: "absolute" }}></Box>
          <WelcomeTextHeader />
        </Stack>
      </Box>
    
  );
};

export default HomepageHeader;

const pages = ["about", "reservations", "explore", "gallery"];
