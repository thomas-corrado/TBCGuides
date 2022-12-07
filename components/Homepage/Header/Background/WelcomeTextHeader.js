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
              sx={{ zIndex: 2 }}
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
            <Link href='/reservations'>
              <Typography
                className="homepage-reservation-text"
                sx={{ zIndex: 2 }}
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
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});