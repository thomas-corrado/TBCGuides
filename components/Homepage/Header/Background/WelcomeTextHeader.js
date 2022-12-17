import { Typography, Box, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WelcomeTextHeader = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    
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
          <Typography variant="h1" color="primary">
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
              variant="h5"
            
              color="primary"
            >
              Make a Reservation
            </Typography>
          </Link>
        </Box>
      </Stack>
   
  );
};

export default WelcomeTextHeader;
