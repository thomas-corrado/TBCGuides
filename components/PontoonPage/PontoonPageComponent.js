import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import PontoonImageGallery from "./PontoonImageGallery/PontoonImageGallery";

const PontoonPageComponent = () => {
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
          }}
        >
          <Typography variant="h2_about" mt={5} mb={4}>
            Pontoon Boat
          </Typography>
          <Box
            sx={{
              width: { xs: "calc(90vw)", md: "calc(20vw + 20rem)" },
              height: "calc(10vw + 15rem)",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              // data-aos="fade-in"
              priority
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              src="https://s3.amazonaws.com/tbcguides.fish/MarcOkrantFinal.jpg"
              alt="middle-aged man smiling, wearing tan hat, and wearing sunglasses while standing in water and holding fish horizontally"
              loading="eager"
            ></Image>
          </Box>
          <Box
            mt={2}
            mb={1}
            sx={{
              width: { xs: "85vw", md: "75vw" },
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Typography variant="h5_pontoon" mt={3} mb={2}>
              Take a ride with a licensed boat captain on a beautifully equipped
              24’ pontoon boat on the Connecticut River, Lake Morey, Lake
              Sunapee or your favorite body of water in Vermont or New
              Hampshire. This boat accommodates up to 8 passengers. Services
              include: cruising for fun with family and friends; fishing for
              bass pike, walleye or trout; celebrating life - spreading a loved
              one’s ashes with an on-water memorial service; easily boarding on
              and off at a dock.
            </Typography>
          </Box>
          <Box
            mt={2}
            mb={4}
            sx={{
              width: { xs: "85vw", md: "75vw" },
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Grid container spacing={{ md: 12 }}>
              <Grid item xs={12} md={6}>
                <Stack direction="column">
                  <Box
                    sx={{
                      width: "calc(75px + 6vw)",
                      height: "calc(75px + 6vw)",
                      position: "relative",
                      display: "flex",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      priority
                      fill
                      style={{ objectFit: "cover" }}
                      quality={100}
                      src="https://s3.amazonaws.com/tbcguides.fish/anchor_FILL0_wght400_GRAD0_opsz48.svg"
                      alt="frozen-over-lake"
                      loading="eager"
                    ></Image>
                  </Box>
                  <Typography variant="h5_pontoon" mt={3} mb={2}>
                    Marc Okrant is captain of “The Menagerie”, an extremely fun
                    and family-friendly 24-foot pontoon boat that can
                    accommodate up to 8 passengers. The boat is well equipped
                    for enjoying time with family and friends, catching some
                    sun, and doing some excellent fishing in many New Hampshire
                    and Vermont waters. The Menagerie has a quiet four-stroke
                    115 horsepower Mercury engine, ample cooler space and a
                    grill for cooking steaks, burgers, chicken and more.
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  top: {
                    xs: "-.5rem",
                    md: "0",
                    position: "relative",
                    display: "flex",
                  },
                }}
              >
                <Stack direction="column">
                  <Box
                    sx={{
                      width: "calc(75px + 6vw)",
                      height: "calc(75px + 6vw)",
                      position: "relative",
                      display: "flex",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      priority
                      fill
                      style={{ objectFit: "cover", paddingTop: "1rem" }}
                      quality={100}
                      src="https://s3.amazonaws.com/tbcguides.fish/person_FILL0_wght400_GRAD0_opsz48.svg"
                      alt="frozen-over-lake"
                      loading="eager"
                    ></Image>
                  </Box>
                  <Typography variant="h5_pontoon" mt={3}>
                    Captain Marc has been boating and fishing since his
                    childhood and is now a licensed commercial boat operator.
                    Originally from the state of Connecticut, he has fished for
                    stripers in the River&#39;s estuary where it empties into
                    the Long Island sound. Today, he spends most of his time on
                    the Connecticut River bordering Vermont and New Hampshire,
                    where you catch bass, pike and even walleye. When not
                    boating or fishing, Marc enjoys traveling, having been to 4
                    continents and over 40 states. Ask him about some of his
                    journeys on your next boat trip.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box
            mb={2}
            mt={{ xs: 0, md: 1 }}
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              color="secondary"
              variant="outlined"
              sx={{ width: { xs: "80%", sm: "45%", md: "35%" } }}
              onClick={() => router.push(`/reservations`)}
            >
              <Typography variant="h3_about">Make a Reservation</Typography>
            </Button>
          </Box>

          <PontoonImageGallery
            image_prelim={"Pontoon-"}
            image_array={itemData}
            image_format={"jpeg"}
          />
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default PontoonPageComponent;

const pages = ["about", "reservations", "services", "explore", "gallery"];

const itemData = [
  {
    number: 1,
    description:
      "middle-aged man sitting on boat, wearing sunglasses, wearing a baseball hat, smiling, and holding a fish vertically",
  },
  {
    number: 2,
    description:
      "middle-aged man on one knee, wearing a grey jacket with red sweatshirt, wearing a baseball UVM hat, smiling, and holding a fish horizontally",
  },
  {
    number: 3,
    description:
      "middle-aged man starnding in water, wearing a green jacket, wearing a baseball hat with sunglasses on top, biting a fishing rod handle, and holding a fish horizontally",
  },
  {
    number: 4,
    description:
      "middle-aged man standing on a pontoon boat, wearing a blue sweatshirt, wearing a baseball hat, wearing sunglasses, biting a cigar, and holding a fish horizontally",
  },
  {
    number: 5,
    description:
      "middle-aged man standing beside a river, wearing a winter green jacket, wearing a winter hat, wearing sunglasses, smiling, and holding a fish horizontally",
  },
  {
    number: 6,
    description:
      "middle-aged man standing on a frozen lake, wearing a winter green jacket with hood up, smiling, and holding a fish horizontally",
  },
  {
    number: 7,
    description:
      "Man standing on a red and white pontoon boat in the middle of a foggy lake ",
  },
  {
    number: 8,
    description:
      "red and white pontoon boat hitched to a white chevrolet truck with a white truck cap",
  },
];
