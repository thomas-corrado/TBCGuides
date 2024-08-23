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
      sx={{
        width: "100vw",
        backgroundColor: "#808184",

        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        // data-aos="fade-up"
        variant="h1"
        color="primary"
        mt={{ xs: 4, sm: 4, lg: 5 }}
        mb={{ xs: 3, sm: 3, lg: 4 }}
        sx={{ width: "80vw", textAlign: "center" }}
      >
        Touring Led by Mike Blatt
      </Typography>

      <Box
        sx={{ width: "100vw", display: "flex", justifyContent: "center" }}
        mb={8}
      >
        <Grid
          // data-aos="fade-up"
          container
          direction="row"
          spacing={2}
          sx={{ width: "87.5vw" }}
        >
          <Grid item container lg={6} sm={12} xs={12}>
            <Image
              src="https://s3.amazonaws.com/tbcguides.fish/self-1.jpeg"
              srcSet="https://s3.amazonaws.com/tbcguides.fish/self-1.jpeg"
              alt="man standing in water beside kayak fishing boat holding black water bottle"
              className="complicated-image"
              layout="fill"
              style={{ border: "4px solid #fff" }}
            />
          </Grid>
          <Grid item container lg={6} sm={12} xs={12}>
            <Image
              src="https://s3.amazonaws.com/tbcguides.fish/self-2.jpeg"
              srcSet="https://s3.amazonaws.com/tbcguides.fish/self-2.jpeg"
              alt="man wearing hat and sunglasses tying bait onto fishing line"
              className="complicated-image"
              layout="fill"
              style={{ border: "4px solid #fff" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default MikeInfo;
