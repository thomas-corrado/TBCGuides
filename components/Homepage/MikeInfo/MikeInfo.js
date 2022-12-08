import { Stack, Grid, Typography, Button, Box } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..

const MikeInfo = () => {
    const router = useRouter()

    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <ThemeProvider theme={MikeTheme}>
        <Stack
          direction="column"
          sx={{ width: "100vw", backgroundColor: "#808184" }}
        >
          <Typography
            data-aos="fade-right"
            variant="h2"
            color="primary"
            mt={{ xs: 4, sm: 4, lg: 6 }}
            mb={{ xs: 4, sm: 4, lg: 6 }}
            ml={{ xs: 4, md: 8 }}
          >
            Touring Led by Mike Blatt
          </Typography>

          <Box
            sx={{ width: "100vw", display: "flex", justifyContent: "center" }}
          >
            <Grid
              data-aos="fade-up"
              container
              direction="row"
              spacing={4}
              sx={{ width: "87.5vw" }}
            >
              <Grid item container lg={6} sm={12} xs={12}>
                <Image
                  src="https://d14drtvwlopsgs.cloudfront.net/michael-blatt-ice_2.jpg"
                  srcSet="https://d14drtvwlopsgs.cloudfront.net/michael-blatt-ice_2.jpg"
                  alt="mike"
                  className="complicated-image"
                  layout="fill"
                />
              </Grid>
              <Grid item container lg={6} sm={12} xs={12}>
                <Image
                  src="https://d14drtvwlopsgs.cloudfront.net/bio-cropped.jpg"
                  srcSet="https://d14drtvwlopsgs.cloudfront.net/bio-cropped.jpg"
                  alt="mike"
                  className="complicated-image"
                  layout="fill"
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            ml={{ xs: 4, md: 8 }}
            mt={{ xs: 4, sm: 4, lg: 6 }}
            mb={8}
            sx={{ width: { xs: "80vw", sm: "90vw", md: "55vw" } }}
          >
            <Typography mb={4} variant="h3" color="primary">
              Mike is an extremely experienced fisherman and proud member of the{" "}
              <Link
                color="jackson"
                href="https://hub.jacksonkayak.com/team-jk/kayak-fishing-regional-team/michael-blatt/"
                style={{ textDecoration: "underline", color: "#f4bc41" }}
              >
                Jackson Kayak Fishing Team.
              </Link>
            </Typography>

            <Button
              disableRipple
              variant="contained"
              color="offgrey"
              sx={{
                borderRadius: "0",
              }}
              onClick={() =>
                router.push(
                  "https://hub.jacksonkayak.com/team-jk/kayak-fishing-regional-team/michael-blatt/"
                )
              }
            >
              <Typography variant="h6" color="primary">
                Mike&#39;s Blog
              </Typography>
            </Button>
          </Box>
        </Stack>
      </ThemeProvider>
    );
}

export default MikeInfo

const MikeTheme = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
    h2: {
      fontSize: "calc(3vmin + 5vmax - 3vw)",
      lineHeight: "calc(3vmin + 5vmax - 3vw + .5rem)",
      width: "80vw"
    },
    h3: {
      fontSize: "calc(2vmin + 3.5vmax - 2vw)",
      lineHeight: "calc(2vmin + 3.5vmax - 2vw + 1rem)",
    },
    h6: {
      fontSize: "calc((2vmin + 3.5vmax - 2vw)/2)",
      paddingTop: ".5rem",
      paddingBottom: ".5rem",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
    offwhite: {
      main: "#D9D9D9",
    },
    offgrey: {
      main: "#a8a6a1",
    },
    jackson: {
      main: "#f4bc41",
    },
  },
  components: {
    MuiButton: {
        styleOverrides: {
            root: {
                boxShadow: "none"
            }
        }
    }
  }
});