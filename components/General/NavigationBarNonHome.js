import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBarWrapper from "../Homepage/Header/HeaderBar/AppBarWrapper";

const navigationBarNonHomeTheme = createTheme({
  typography: {
    fontFamily: ["Antonio"].join(","),
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
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
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
  },
});

const NavigationBarNonHome = ({ pages }) => {
    const [isOpen, setOpen] = useState(false);

  return (
    <ThemeProvider theme={navigationBarNonHomeTheme}>
      <AppBarWrapper colorOne="black" colorTwo="black" pages={pages} />
    </ThemeProvider>
  );
};

export default NavigationBarNonHome;

{/* <Box>
  <AppBar
    position="static"
    sx={{ backgroundColor: "white", boxShadow: "none" }}
  >
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
          className="navigation-bar-non-home-box"
        >
         
          <HamburgerWrapper
            isOpen={isOpen}
            setOpen={setOpen}
            colorOne="black"
            colorTwo="black"
          />

        
          <DrawerWrapper
            className="general-drawer-wrapper"
            isOpen={isOpen}
            pages={pages}
          />
        </Box>

        
        <HeaderBarPageButtons pages={pages} position="center" />
      </Toolbar>
    </Container>
  </AppBar>
</Box>; */}


