import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BackgroundImage from "./Background/BackgroundImage";
import AppBarWrapper from "./HeaderBar/AppBarWrapper";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const menuAndDrawer = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
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
            <Typography
              className="homepage-header-text"
              sx={{ fontSize: "calc(4vmin + 3.5vmax)", zIndex: 2 }}
            >
              Welcome to the Upper Valley&rsquo;s Premiere Kayak, Ice, and Fly
              Fishing Guide Service
            </Typography>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default HomepageHeader;

const pages = ["about", "reservations", "gallery"];