import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import BackgroundImage from "./BackgroundImage";
import AppBarWrapper from "./AppBarWrapper";
import WelcomeHeader from "./WelcomeHeader";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HomepageHeader = (props) => {
  return (
    <>
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
                flexDirection: "row",
                display: "flex",
              }}
            >
              Welcome to the Upper Valley&rsquo;s Premiere Kayak, Ice, and Fly
              Fishing Guide Service
            </Typography>
          </Box>
        </Stack>

        {/* <Box
        style={{
          display: "flex",
          width: "100vw",
          height: "32rem",
          position: "relative",
          justifyContent: "center",
          overflow: "hidden",
        }}
      > */}
        {/* <WelcomeHeader /> */}
        {/* <BackgroundImage />
          <WelcomeHeader /> */}
        {/* </Box> */}
      </Box>
    </>

    //   <>
    //     <Box sx={{ width: "100vw" }}>
    //       {/* <BackgroundImage /> */}

    //       <BackgroundImage />
    //       <Box
    //         style={{
    //           display: "flex",
    //           width: "100vw",
    //           height: "32rem",
    //           position: "relative",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <WelcomeHeader />
    //       </Box>
    //     </Box>
    //   </>
  );
};

export default HomepageHeader;
