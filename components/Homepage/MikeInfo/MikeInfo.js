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
      <Stack
        direction="column"
        sx={{ width: "100vw", backgroundColor: "#808184" }}
      >
        <Typography
          data-aos="fade-up"
          variant="h1"
          color="primary"
          mt={{ xs: 4, sm: 4, lg: 6 }}
          mb={{ xs: 4, sm: 4, lg: 6 }}
          ml={{ xs: 4, md: 8 }}
          sx={{ width: "80vw"}}
        >
          Touring Led by Mike Blatt
        </Typography>

        <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
          <Grid
            data-aos="fade-up"
            container
            direction="row"
            spacing={4}
            sx={{ width: "87.5vw" }}
          >
            <Grid item container lg={6} sm={12} xs={12}>
              <Image
                src="https://s3.amazonaws.com/tbcguides.fish/michael-blatt-ice_2.jpg"
                srcSet="https://s3.amazonaws.com/tbcguides.fish/michael-blatt-ice_2.jpg"
                alt="mike"
                className="complicated-image"
                layout="fill"
              />
            </Grid>
            <Grid item container lg={6} sm={12} xs={12}>
              <Image
                src="https://s3.amazonaws.com/tbcguides.fish/bio-cropped.jpg"
                srcSet="https://s3.amazonaws.com/tbcguides.fish/bio-cropped.jpg"
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
          mb={6}
          sx={{ width: { xs: "80vw", sm: "90vw", md: "55vw" } }}
        >
          <Typography mb={4} variant="h3" color="primary" data-aos="fade-up">
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
            data-aos="fade-up"
            disableRipple
            variant="contained"
            color="mikesgrey"

            onClick={() =>
              router.push(
                "https://hub.jacksonkayak.com/team-jk/kayak-fishing-regional-team/michael-blatt/"
              )
            }
          >
            <Typography color="primary" variant="h7" >
              Mike&#39;s Blog
            </Typography>
          </Button>
        </Box>
      </Stack>
    );
}

export default MikeInfo

// const MikeTheme = createTheme({
//   typography: {
//     fontFamily: ["belda-normal"].join(","),
//     h2: {
//       fontSize: "calc(2.2rem + 1.3vw)",
//       lineHeight: "calc(2.5rem + 1.3vw)",
//       width: "80vw",
//     },
//     h3: {
//       fontSize: "calc(1.4rem + 1vw)",
//       lineHeight: "calc(1.4rem + 1vw + 1rem)",
//     },
//     h6: {
//       fontSize: "calc((1.4rem + 1vw)/1.7)",
//     },
//   },
//   palette: {
//     primary: {
//       main: "#FFFFFF",
//     },
//     secondary: {
//       main: "#000000",
//     },
//     offwhite: {
//       main: "#D9D9D9",
//     },
//     offgrey: {
//       main: "#a8a6a1",
//     },
//     jackson: {
//       main: "#f4bc41",
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           boxShadow: "none",
//         },
//       },
//     },
//   },
// });