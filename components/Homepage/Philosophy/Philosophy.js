import { Stack, Grid, Typography, Button, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const Philosophy = () => {
    const router = useRouter(); 
    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <ThemeProvider theme={PhilosophyTheme}>
        <Box
          
        >
          <Grid
            data-aos="fade-right"
            container
            direction="row"
            rowSpacing={4}
            mt={{ xs: 4, sm: 4, lg: 16 }}
            mb={{ xs: 8, sm: 8, lg: 20 }}
          >
            <Grid item container lg={7} md={12} sm={12} xs={12}>
              <Typography
                variant="h3"
                color="primary"
                ml={{ xs: 4, sm: 4, md: 6, lg: 8 }}
                sx={{ width: { xs: "80%", sm: "80%", md: "80%", lg: "100%" } }}
              >
                By providing instruction on each trip, TBC fishing experiences
                gives guests the chance to become lifelong fishers.
              </Typography>
            </Grid>

            <Grid
              item
              container
              lg={4}
              md={12}
              sm={12}
              xs={12}
              ml={{ xs: 4, sm: 4, md: 6, lg: 8 }}
              sx={{ justifyContent: { xs: "none", lg: "center" } }}
            >
              <Stack
                direction="column"
                sx={{ justifyContent: "center" }}
                spacing={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    Learn more about what a <br /> day with TBC Guides is like.
                  </Typography>
                </Box>

                <Button
                  disableRipple
                  variant="contained"
                  color="offwhite"
                  sx={{
                    borderRadius: "0",
                    padding: "1rem",
                  }}
                  onClick={() => router.push("/about")}
                >
                  <Typography variant="h6" color="secondary">
                    Learn More
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    );
}

export default Philosophy

const PhilosophyTheme = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
    h3: {
      fontSize: "calc(2vmin + 3.5vmax - 1vw)",
      lineHeight: "calc(2vmin + 3.5vmax - 1vw + 1.5rem)",
    },
    h6: {
      fontSize: "calc((3vmin + 4.5vmax - 1.75vw)/2)",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#5D6D86",
    },
    offwhite: {
      main: "#D9D9D9",
    },
    offblue: {
      main: "#5D6D86",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#D9D9D9",
          },
        },
      },
    },
  },
});