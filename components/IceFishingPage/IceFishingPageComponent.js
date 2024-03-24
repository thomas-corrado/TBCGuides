import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import PontoonImageGallery from "../PontoonPage/PontoonImageGallery/PontoonImageGallery";

const IceFishingPageComponent = () => {
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
            Ice Fishing
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
              src="https://s3.amazonaws.com/tbcguides.fish/Homepage_2.jpeg"
              alt="snow mobile on snow-covered lake with sun setting behind tree line"
              loading="eager"
            ></Image>
          </Box>
          <Box
            mt={3}
            mb={4}
            sx={{
              width: { xs: "85vw", md: "75vw" },
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Typography variant="h5_pontoon" mt={3} mb={2}>
              Ice fishing is a great way to get outside during the colder months and catch 
              fish. On an ice fishing trip, I take guests out on a lake for half or full days
              and dig into the ice. We will place our lines in the water and wait for the 
              fish to bite. 
            </Typography>
          </Box>

          <Box
            mb={{ xs: 6, md: 8 }}
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
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default IceFishingPageComponent;

const pages = ["about", "reservations", "services", "explore", "gallery"];

const itemData = [
  {
    number: "01",
    description:
      "Woman in white shirt next to man holding largemouth bass on blue boat",
  },
  {
    number: "02",
    description: "boy in blue shirt and pink shorts holding largemouth bass",
  },
  {
    number: "03",
    description: "Woman in white hat and black pants holding largemouth bass",
  },
  {
    number: "04",
    description:
      "Zoomed out photo of man in red shirt and woman in white jacket and blank pants fly fishing on blue boat",
  },
  {
    number: "06",
    description:
      "Man with no shoes, grey shorts, and white shirt holds largemouth bass on blue boat",
  },
  {
    number: "07",
    description:
      "Man in straw hat and black shirt kneels down holding largemouth bass on boat",
  },
  {
    number: "08",
    description: "Two girls in swimsuits hold largemouth bass on blue boat",
  },
  {
    number: "09",
    description:
      "younger man holds largemouth bass on boat while wearing sunglasses, grey shirt, and black shorts",
  },
  {
    number: 10,
    description: "Older woman in green shirt holds laremouth bass on blue boat",
  },
  {
    number: 11,
    description:
      "boy in purple life jacket holds smallmouth bass with two hands",
  },
  {
    number: 12,
    description:
      "Tall man wearing black bucket hat, blue shirt, and grey shorts holds smallmouth bass on blue boat",
  },
  {
    number: 13,
    description:
      "man wearing black jacket, glasses, and beige baseball cap holding up fish with gills out",
  },
  {
    number: 14,
    description: "boy in grey jacket holds largemouth bass on blue boat",
  },
  {
    number: 15,
    description:
      "Man in green sunglasses, grey shirt, and camo shorts holds largemouth bass on blue boat",
  },
  {
    number: 17,
    description:
      "Man in brown baseball cap, camo jacket, and grey pants holds largemouth bass on boat",
  },
  {
    number: 18,
    description: "close-up of australian shepherd sitting on boat",
  },
  {
    number: 19,
    description:
      "older man in blue shirt, beige crocks, bucket hat, and blue sunglasses holds up largemouth bass on boat",
  },
  {
    number: 20,
    description:
      "Girl in sweatshirt, black sweatpants, and white shoes holds largemouth bass on blue boat",
  },
  {
    number: 21,
    description:
      "Man in white shirt, grey shorts, and tevas holds largemouth bass on blue boat",
  },
  {
    number: 22,
    description:
      "Father in white shirt, grey shorts, and tevas holds northern pike with two twin boys each wearing navy t-shirts and black baseball caps on boat",
  },
  {
    number: 23,
    description:
      "Man in blue shirt standing on green cooler fly fishing on boat",
  },
  {
    number: 24,
    description:
      "Boy in blue baseball hat and white crocs holding smallmouth bass next to grandfather wearing grey shirt and khaki cargo shorts on blue boat",
  },
  {
    number: 25,
    description:
      "grandfather wearing a blue jacket and his two grandchildren fishing at front of blue boat",
  },
  {
    number: 26,
    description: "Girl sitting on end of blue boat while parked on land",
  },
  {
    number: 27,
    description:
      "blue boat sitting in city parking space while hitched to white truck",
  },
];
