import "../styles/globals.css";
import "../styles/homepage.css";
import "../styles/aboutpage.css"; 
import "../styles/reservationpage.css"; 
import "../styles/GalleryPage.css"
import { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
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
    h4_antonio: {
      fontSize: "calc(1.8rem + 1.5vw)",
      lineHeight: "calc(3.2rem + 1.3vw)",
      fontFamily: ["Antonio"].join(","),
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
      fontSize: "calc(2.5rem + 1.5vw)",
      lineHeight: "calc(3rem + 1.5vw)",
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
    h1_explore: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(2.5rem + 5vw)",
      lineHeight: "3rem",
    },
    h2_explore: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(2.5rem + 1.5vw)",
      lineHeight: "calc(3rem + 1.5vw)",
    },
    h3_explore: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1.5rem + .7vw)",
      lineHeight: "calc(1.5rem + .7vw)",
    },
    h4_explore: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1rem + 1vw)",
    },
    h5_explore: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1.3rem + .1vw)",
      lineHeight: "calc(1.5rem + 1vw)",
    },
    h6_explore: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(.75rem + .75vw)",
      lineHeight: "calc(1.4rem + 1.4vw)",
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
    h2_pontoon: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "3.5rem",
      lineHeight: "3.5rem",
    },
    h4_pontoon: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1vw + .75rem)",
      lineHeight: "calc(1.5vw + 1.5rem)",
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
    onegreen: {
      main: "#187f4a",
    },
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

    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          padding: "0px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'transparent', 
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
          "& .MuiButtonBase": {
            backgroundColor: "green",
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
      MuiButtonBase: {
        defaultProps: {
          fontFamily: ["belda-normal"].join(","),
        },
        styleOverrides: {
          root: {
            backgroundColor: "red",
            fontFamily: ["belda-normal"].join(","),
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          "& .MuiButton-text": {
            backgroundColor: "black",
            fontFamily: ["belda-normal"].join(","),
          },
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontFamily: ["belda-normal"].join(","),
        },
      },
    },
  },
});
