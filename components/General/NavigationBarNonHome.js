import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBarWrapper from "../Homepage/Header/HeaderBar/AppBarWrapper";

const NavigationBarNonHome = ({ pages }) => {

  return (
    
      <AppBarWrapper colorOne="black" colorTwo="black" pages={pages} />
   
  );
};

export default NavigationBarNonHome;

// const navigationBarNonHomeTheme = createTheme({
//   typography: {
//     fontFamily: ["Antonio"].join(","),
//   },
//   palette: {
//     primary: {
//       main: "#000000",
//     },
//     secondary: {
//       main: "#000000",
//     },
//   },
//   components: {
//     MuiDrawer: {
//       styleOverrides: {
//         paper: {
//           background: "white",
//           width: "100vw",
//           height: "100%",
//         },
//       },
//     },
//     MuiBackdrop: {
//       styleOverrides: {
//         root: {
//           background: "none",
//           backgroundColor: "transparent",
//         },
//       },
//     },
//     MuiButton: {
//       defaultProps: {
//         // The props to change the default for.
//         disableRipple: true, // No more ripple, on the whole application 💣!
//         disableFocusRipple: true,
//       },
//       styleOverrides: {
//         root: {
//           "&:hover": {
//             backgroundColor: "transparent",
//           },
//         },
//       },
//     },
//   },
// });

