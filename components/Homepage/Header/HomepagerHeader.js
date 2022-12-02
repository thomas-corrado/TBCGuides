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
        <Stack
          direction="column"
          sx={{
            width: "100vw",
            height: "50rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <AppBarWrapper />

          <Box
            sx={{
              position: "relative",
              width: "100vw",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            mt={-4}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "belda-normal",
                textAlign: "center",
                zIndex: 3,
                fontStyle: "italic",
                fontSize: "calc(4vmin + 3.5vmax)",
                width: "90vw",
              }}
            >
              Welcome to the Upper Valley&rsquo;s Premiere Kayak, Ice, and Fly
              Fishing Guide Service
            </Typography>
          </Box>
        </Stack>
      </Box>)
};

export default HomepageHeader;
