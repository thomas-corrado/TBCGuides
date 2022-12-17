import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BackgroundImage from "./Background/BackgroundImage";
import AppBarWrapper from "./HeaderBar/AppBarWrapper";
import WelcomeTextHeader from "./Background/WelcomeTextHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

const pages = ["about", "reservations", "gallery"];

const menuAndDrawer = createTheme({
  typography: {
    fontFamily: ["Antonio"].join(","),
    h1: {
      fontSize: "4.5rem",
    },
    h3: {
      fontSize: "4rem",
     
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#596d90",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "white",
          width: "100vw",
          height: "100%",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: "none",
          backgroundColor: "transparent",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});