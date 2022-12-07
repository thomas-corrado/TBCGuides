import { Typography, Box, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";

const WelcomeTextHeader = () => {
    return (
      <ThemeProvider theme={welcomeTextTheme}>
        <Stack direction="column" spacing={2} ml={{ xs: 4, md: 6 }} mb={4}>
          <Box
            sx={{
              width: "70vw",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <Typography
              className="homepage-header-text"
              variant="h2"
              color="primary"
            >
              Welcome to the Upper Valley&rsquo;s Premiere Kayak, Ice, and Fly
              Fishing Guide Service
            </Typography>
          </Box>
          <Box
            sx={{
              width: "70vw",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <Link href="/reservations">
              <Typography
                variant="h4"
                className="homepage-reservation-text"
                color="primary"
              >
                Make a Reservation
              </Typography>
            </Link>
          </Box>
        </Stack>
      </ThemeProvider>
    );
}

export default WelcomeTextHeader

const welcomeTextTheme = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
    h2: {
      fontSize: "calc(2vmin + 3.5vmax)",
      lineHeight: "calc(2vmin + 3.5vmax + .5rem)",
    },
    h4: {
      fontSize: "(calc(1.5vmin + 2vmax)",
      lineHeight: "calc(1vmin + 2.5vmax + .5rem)",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});