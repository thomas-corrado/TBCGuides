import "../styles/globals.css";
import "../styles/homepage.css";
import "../styles/general.css"; 
import "../styles/aboutpage.css"; 
import "../styles/reservationpage.css"; 
import "../styles/GalleryPage.css"
import "../styles/MikeInfo.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const StyledLoadingScreen = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fff",
  position: "absolute",
  zIndex: "8",
  position: "fixed",
});

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      (url === router.asPath || router.asPath === "/") &&
      setTimeout(() => {
        setLoading(false);
      }, 950);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div>
        <StyledLoadingScreen />
        <Box sx={{ width: "100%", top: "50vh", position: "absolute" }}>
          <CircularProgress sx={{ color: "black" }} />
        </Box>
      </div>
    )
  );
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "calc(2.2rem + 1.3vw)",
      lineHeight: "calc(2.5rem + 1.3vw)",
      fontFamily: ["belda-normal"].join(","),
    },
    h2: {
      fontSize: "calc(3.5rem + 1.3vw)",
      lineHeight: "calc(3.5rem + 1.3vw)",
      fontFamily: ["belda-normal"].join(","),
      textAlign: "center",
    },
    h3: {
      fontSize: "calc(1.4rem + 1vw)",
      lineHeight: "calc(1.4rem + 1vw + 1rem)",
      fontFamily: ["belda-normal"].join(","),
    },
    h4: {
      fontSize: "calc(1.8rem + 1.5vw)",
      lineHeight: "calc(3.2rem + 1.3vw)",
      fontFamily: ["belda-normal"].join(","),
    },
    h5: {
      fontSize: "calc(1.4rem + .7vw)",
      lineHeight: "calc(1.55rem + .7vw)",
      textDecoration: "underline",
      fontFamily: ["belda-normal"].join(","),
    },
    h6: {
      fontSize: "calc((2.2rem + 1.5vw)/2)",
      fontFamily: ["belda-normal"].join(","),
    },
    h7: {
      fontSize: "22px",
      fontFamily: ["belda-normal"].join(","),
    },
    h8: {
      fontSize: "18px",
      fontFamily: ["belda-normal"].join(","),
    },
    h1_about: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(3.5rem + 5vw)",
      lineHeight: "3rem",
    },
    h2_about: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1.5rem + 2.5vw)",
      lineHeight: "calc(1.5rem + 2.5vw)",
    },
    h3_about: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1.5rem + 1.2vw)",
      lineHeight: "calc(2rem + 1.2vw)",
    },
    h4_about: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1rem + 1vw)",
      lineHeight: "calc(2.4rem + 1.6vw)",
    },
    h5_about: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(.7rem + 1vw)",
      lineHeight: "calc(.7rem + 1vw)",
    },
    h6_about: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(.75rem + 1vw)",
      lineHeight: "calc(1.1rem + 1.4vw)",
    },
    h2_reservations: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "3.5rem",
      lineHeight: "3.5rem",
    },
    h6_reservations: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
    mikesgrey: {
      main: "#a8a6a1",
    },
    tbcblue: "#596d90",
    jackson: "#f4bc41",
    offgrey: {
      main: "#808184",
    },
    warning: {
      main: "#FF0000",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "0px",
        },
      },
    },
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
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "belda-normal",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: "belda-normal",
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          fontFamily: "belda-normal",
          "& .MuiDayPicker-weekDayLabel": {
            fontFamily: "belda-normal",
          },
          "& .PrivatePickersYear-yearButton": {
            fontFamily: "belda-normal",
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontFamily: "belda-normal",
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          "& .MuiPickersCalendarHeader-label": {
            fontFamily: "belda-normal",
          },
        },
      },
    },
    MuiDayPicker: {
      styleOverrides: {
        root: {
          "& .MuiDayPicker-header": {
            fontFamily: "belda-normal",
            backgroundColor: "red",
          },
        },
      },
    },
  },
});
