import { Typography, Box, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..

const WelcomeTextHeader = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={welcomeTextTheme}>
      <Stack
        direction="column"
        spacing={2}
        ml={{ xs: 4, md: 8 }}
        mb={6}
        data-aos="fade-up"
      >
        <Box
          sx={{
            width: { xs: "80vw", sm: "70vw", md: "50vw" },
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Typography variant="h2" color="primary">
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
            
              color="primary"
            >
              Make a Reservation
            </Typography>
          </Link>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default WelcomeTextHeader;

const welcomeTextTheme = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
    h2: {
      fontSize: "calc(2.2rem + 1.3vw)",
      lineHeight: "calc(2.5rem + 1.3vw)",
    },
    h4: {
      fontSize: "calc(1.4rem + .7vw)",
      lineHeight: "calc(1.55rem + .7vw)",
      textDecoration: 'underline'
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});
