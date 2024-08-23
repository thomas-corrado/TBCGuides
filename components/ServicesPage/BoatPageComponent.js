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
            Fishing Services
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
            Click on one of the images below to check out one our four types of
            fishing offerings!
          </Typography>

          <Box sx={{ alignItems: "center", width: "80%" }} mb={4}>
            <Grid spacing={2} container direction="row">
              {services.map((service) => (
                <>
                  <Grid
                    key={service.header}
                    item
                    xs={12}
                    md={6}
                    direction="column"
                  >
                    <Link href={service.hrefLink}>
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
                          src={service.imageLink}
                          alt={service.altSource}
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
                          {service.header}
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                </>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default BoatPageComponent;

const pages = ["about", "reservations", "explore"];

const services = [
  {
    header: "Bass Boat",
    hrefLink: "/bass-boat",
    imageLink: "https://s3.amazonaws.com/tbcguides.fish/main-bass-boat.jpeg",
    altSource: "bass boat attached to truck on grass",
  },
  {
    header: "Pontoon Boat",
    hrefLink: "/pontoon",
    imageLink: "https://s3.amazonaws.com/tbcguides.fish/MarcOkrantFinal.jpg",
    altSource:
      "middle-aged man smiling, wearing tan hat, and wearing sunglasses while standing in water and holding fish horizontally",
  },
  {
    header: "Kayak Fishing",
    hrefLink: "/kayak",
    imageLink: "https://s3.amazonaws.com/tbcguides.fish/winter-7.jpg",
    altSource: "blank",
  },
  {
    header: "Ice Fishing",
    hrefLink: "/ice-fishing",
    imageLink: "https://s3.amazonaws.com/tbcguides.fish/Homepage_2.jpeg",
    altSource: "blank",
  },
];
