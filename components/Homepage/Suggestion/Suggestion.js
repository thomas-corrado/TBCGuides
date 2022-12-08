import { Stack, Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Suggestion = () => {
    const router = useRouter(); 

 useEffect(() => {
   AOS.init();
 }, []);

    return (
      <>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#1E1E1E",
            position: "relative",
            alignContent: "center",
          }}
        >
          <Box sx={{ width: "100vw", height: "689px" }}>
            <Image
              src="https://d14drtvwlopsgs.cloudfront.net/ReadyBackground-copy.jpeg"
              srcSet="https://d14drtvwlopsgs.cloudfront.net/ReadyBackground-copy.jpeg"
              alt="New Hampshire Sky"
              className="complicated-ready-image"
              layout="fill"
              style={{ opacity: 0.3 }}
            />
          </Box>
          <Box
            sx={{
              width: "100vw",
              height: "689px",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              data-aos="fade-up"
              direction="column"
              spacing={6}
              sx={{
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                color="secondary"
                sx={{ textAlign: "center" }}
              >
                Ready to get started?
              </Typography>
              <Button
                disableTouchRipple
                variant="contained"
                color="secondary"
                sx={{ borderRadius: 0, maxWidth: "70vw" }}
                onClick={() => router.push("reservations")}
              >
                <Typography
                  variant='h4'
                  color="black"
                  mt={2}
                  mb={2}
                  ml={2}
                  mr={2}
                >
                  Make a Reservation
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Box>
      </>
    );
}
export default Suggestion