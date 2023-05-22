import { Stack, Typography, Box, Button } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import Image from "next/image";

const PontoonPageComponent = () => {
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
          <Typography variant="h2_about" mt={5} mb={3}>
            Pontoon Boats
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
              alt="frozen-over-lake"
              loading="eager"
            ></Image>
          </Box>
          <Box
            mt={3}
            mb={2}
            sx={{
              width: { xs: "85vw", md: "75vw" },
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Typography variant="h4_pontoon" mb={2}>
              Marc Okrant is captain of “The Menagerie” an extremely fun and
              family-friendly 24-foot pontoon boat that can accommodate up to 8
              passengers. The boat is well equipped for enjoying time with
              family and friends, catching some sun, and doing some excellent
              fishing in many New Hampshire and Vermont waters. The Menagerie
              has a quiet four-stroke 115 horsepower Mercury engine, ample
              cooler space and a grill for cooking steaks, burgers, chicken and
              more. Captain Marc has been boating and fishing since his
              childhood and is now a licensed commercial boat operator. Marc is
              very familiar with navigating the Connecticut River and many other
              local waterways. Originally from the state of Connecticut, he has
              fished for stripers in the River’s estuary where it empties into
              the Long Island sound. Marc is also an avid fly fisherman citing
              his home waters as the Farmington River, one of New England’s
              finest blue ribbon trout streams. Today he spends most of his time
              on the Connecticut River bordering Vermont and New Hampshire where
              you can see bald eagles soaring and deer drinking from the
              riverbanks. Here you catch bass, pike and even walleye – many of
              them very large. When not boating or fishing, Marc enjoys
              traveling, having been to 4 continents and over 40 states. Ask him
              about some of his journeys on your next boat trip.
            </Typography>
          </Box>

          <Box
            mb={6}
            mt={{ xs: 0, md: 1}}
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              color="secondary"
              variant="outlined"
              sx={{ width: {xs: "80%", sm: "45%",  md: "35%"} }}
              onClick={() => router.push(`/reservations`)}
            >
              <Typography variant="h3_about">Make a Reservation</Typography>
            </Button>
          </Box>
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default PontoonPageComponent;

const pages = ["home", "about", "reservations", "explore", "gallery"];
