import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BackgroundImage from "./Background/BackgroundImage";
import AppBarWrapper from "./HeaderBar/AppBarWrapper";

const HomepageHeader = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
      }}
    >
      <BackgroundImage />
      <Stack className="homepage-header-stack" direction="column" >
        <AppBarWrapper />
        <Box className="homepage-header-box" mt={-4}>
          <Typography className="homepage-header-text" sx={{ fontSize: "calc(4vmin + 3.5vmax)", zIndex: 2 }}>
            Welcome to the Upper Valley&rsquo;s Premiere Kayak, Ice, and Fly
            Fishing Guide Service
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomepageHeader;
