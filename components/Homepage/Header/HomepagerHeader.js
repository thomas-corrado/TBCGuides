import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BackgroundImage from "./Background/BackgroundImage";
import AppBarWrapper from "./HeaderBar/AppBarWrapper";
import WelcomeTextHeader from "./Background/WelcomeTextHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const HomepageHeader = () => {
  return (
    <ThemeProvider theme={menuAndDrawer}>
      <Box
        sx={{
          width: "100vw",
          position: "relative",
        }}
      >
        <BackgroundImage />
        <Stack className="homepage-header-stack" direction="column">
          <AppBarWrapper colorOne="white" colorTwo="#596d90" pages={pages} />
          <Box className="homepage-header-box" mt={-4}>
            <WelcomeTextHeader/>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default HomepageHeader;

const pages = ["about", "reservations", "gallery"];

const menuAndDrawer = createTheme({
  typography: {
    fontFamily: ["Antonio"].join(","),
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