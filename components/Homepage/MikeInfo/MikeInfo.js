import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Stack, Grid, Typography, Button, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MikeInfo = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Stack
      direction="column"
      sx={{ width: "100vw", backgroundColor: "#808184" }}
    >
      <Typography
        // data-aos="fade-up"
        variant="h1"
        color="primary"
        mt={{ xs: 4, sm: 4, lg: 6 }}
        mb={{ xs: 4, sm: 4, lg: 6 }}
        ml={{ xs: 4, md: 8 }}
        sx={{ width: "80vw" }}
      >
        Touring Led by Mike Blatt
      </Typography>

      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <Grid
          // data-aos="fade-up"
          container
          direction="row"
          spacing={4}
          sx={{ width: "87.5vw" }}
        >
          <Grid item container lg={6} sm={12} xs={12}>
            <Image
              src="https://s3.amazonaws.com/tbcguides.fish/michael-blatt-ice_2.jpg"
              srcSet="https://s3.amazonaws.com/tbcguides.fish/michael-blatt-ice_2.jpg"
              alt="Mike Blatt holding fish on frozen lake"
              className="complicated-image"
              layout="fill"
            />
          </Grid>
          <Grid item container lg={6} sm={12} xs={12}>
            <Image
              src="https://s3.amazonaws.com/tbcguides.fish/bio-cropped.jpg"
              srcSet="https://s3.amazonaws.com/tbcguides.fish/bio-cropped.jpg"
              alt="Mike Blatt holding fish in kayak on water"
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
        <Typography mb={4} variant="h3" color="primary">
          Mike is a licensed guide and proud member of the{" "}
          <Link
            color="jackson"
            href="https://hub.jacksonkayak.com/team-jk/kayak-fishing-regional-team/michael-blatt/"
            style={{ textDecoration: "underline", color: "#f4bc41" }}
          >
            Jackson Kayak Fishing Team.
          </Link>
        </Typography>

        <Button
          // data-aos="fade-up"
          disableRipple
          variant="contained"
          color="mikesgrey"
          onClick={() =>
            router.push(
              "https://hub.jacksonkayak.com/team-jk/kayak-fishing-regional-team/michael-blatt/"
            )
          }
        >
          <Typography color="primary" variant="h7">
            Mike&#39;s Blog
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default MikeInfo;
