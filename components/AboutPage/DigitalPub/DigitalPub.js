import { Stack, Box, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const DigitalPub = () => {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        backgroundColor: "#D9D9D9",
      }}
      
    >
      <Box sx={{ width: { xs: "80vw", sm: "85vw" } }} mt={7} mb={7}>
        <Stack direction="column">
          <Typography mb={{ sm: 4, md: 2 }} variant="h2_about">
            Media Features
          </Typography>
          <Grid
            container
            direction="row"
            columnSpacing={2}
            rowSpacing={{ xs: 1, sm: 0 }}
          >
            <Grid
              item
              container
              sm={6}
              xs={12}
              sx={{
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography variant="h4_about" mt={2}>
                TBC Guides was featured in the summer 2023 issue of the{" "}
                <q>Here in Hanover</q> magazine. Click the image to learn more
                about fishing with Mike.
              </Typography>
            </Grid>
            <Grid
              item
              container
              sm={6}
              xs={12}
              sx={{
                width: "100%",
              }}
            >
              <Button
                aria-label="here-in-hanover-magainze-button"
                onClick={() =>
                  router.push(
                    "https://issuu.com/mountainviewpublishing/docs/here-in-hanover-summer-2023"
                  )
                }
                sx={{
                  width: { xs: "100vw" },
                  height: { xs: "100vw", sm: "calc(70vw - 20vh)", md: "50vw" },

                  "&:hover": {
                    backgroundColor: "transparent",
                    filter: "brightness(.85)",
                  },
                }}
                disableFocusRipple
                startIcon={
                  <Image
                    priority
                    fill
                    style={{ objectFit: "contain" }}
                    quality={100}
                    src="https://s3.amazonaws.com/tbcguides.fish/here-in-hanover-cover.jpeg"
                    alt="new hampshire fishing license logo"
                    loading="eager"
                    sx={{
                      "&:hover": {},
                    }}
                  ></Image>
                }
              ></Button>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default DigitalPub;
