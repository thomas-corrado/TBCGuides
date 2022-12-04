import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const WelcomeTextHeader = () => {
    return (
      <ThemeProvider theme={welcomeTextTheme}>
        <Typography
          className="homepage-header-text"
          sx={{ fontSize: "calc(4vmin + 3.5vmax)", zIndex: 2 }}
          color="primary"
        >
          Welcome to the Upper Valley&rsquo;s Premiere Kayak, Ice, and Fly
          Fishing Guide Service
        </Typography>
      </ThemeProvider>
    );
}

export default WelcomeTextHeader

const welcomeTextTheme = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});