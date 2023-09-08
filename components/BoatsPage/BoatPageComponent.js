import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const BoatPageComponent = () => {
  const router = useRouter();

  return (
    <>
      <Stack className="about-stack" direction="column">
        <NavigationBarNonHome pages={pages} />
      </Stack>

      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="column"
          sx={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2_about" mt={5}>
            Boats
          </Typography>

          <Typography
            mt={2}
            mb={3}
            sx={{
              width: "80%",
              fontSize: "calc(1.3rem + .5vw)",
              fontFamily: "belda-normal",
            }}
          >
            Click on one of the images below to check out our two boat
            offerings!
          </Typography>

          <Box sx={{ alignItems: "center", width: "80%" }}>
            <Grid spacing={2} container direction="row">
              <Grid
                item
                xs={12}
                md={6}
                direction="column"
                mb={{ md: 0, lg: 8 }}
              >
                <Link href={"/bass-boat"}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "calc(10vw + 15rem)",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      priority
                      fill
                      style={{ objectFit: "cover", opacity: 0.2 }}
                      quality={100}
                      src="https://s3.amazonaws.com/tbcguides.fish/bass-boat-photos-05.jpg"
                      alt="Man in red shirt and woman in white jacket and blank pants fly fishing on blue boat"
                      loading="eager"
                    ></Image>
                    <Typography
                      variant="h2_about"
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      Bass Boat
                    </Typography>
                  </Box>
                </Link>
              </Grid>

              <Grid item xs={12} md={6} direction="column" mb={6}>
                <Link href={"/pontoon"}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "calc(10vw + 15rem)",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      priority
                      fill
                      style={{ objectFit: "cover", opacity: 0.2 }}
                      quality={100}
                      src="https://s3.amazonaws.com/tbcguides.fish/MarcOkrantFinal.jpg"
                      alt="middle-aged man smiling, wearing tan hat, and wearing sunglasses while standing in water and holding fish horizontally"
                      loading="eager"
                    ></Image>
                    <Typography
                    
                      variant="h2_about"
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "2rem"
                      }}
                    >
                      Pontoon Boat
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default BoatPageComponent;

const pages = ["about", "reservations", "boats", "explore", "gallery"];
