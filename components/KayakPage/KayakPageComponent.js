import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import PontoonImageGallery from "../PontoonPage/PontoonImageGallery/PontoonImageGallery";

const KayakPageComponent = () => {
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
            Kayak Fishing
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
              src="https://s3.amazonaws.com/tbcguides.fish/winter-7.jpg"
              alt="man in kneeling in fishing kayak while holding fish horizontally"
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
              I initiated TBC guides using kayaks. I did not have the bass boat
              I have now, and I was not working with Marc and his pontoon boat.
              Fishing on a kayak is unique, allowing each paddler to create
              their own experience. My background in kayak fishing led me to the{" "}
              <Link
                href={
                  "https://www.skeeterboats.com/Skeeter-Boat.php?id=165#:~:text=The%20ZXR21%2C%20is%20the%20top,and%20efficient%2C%20lighter%20yet%20stronger"
                }
                style={{ textDecoration: "underline", color: "#0000EE" }}
              >
                Jackson Kayak Fishing Team
              </Link>
              , where I belong as a proud member. If you are interested in
              learning more about my background in kayak fishing, check out my
              blog{" "}
              <Link
                href={
                  "https://hub.jacksonkayak.com/team-jk/kayak-fishing-regional-team/michael-blatt/"
                }
                style={{ textDecoration: "underline", color: "#0000EE" }}
              >
                here
              </Link>
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
          <PontoonImageGallery
            image_prelim={"fish-holding-"}
            image_array={itemData}
            image_format={"jpg"}
          />
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default KayakPageComponent;

const pages = ["about", "reservations", "services", "explore"];

const itemData = [
  {
    number: 1,
    description: "Man in red shirt holding two fish while smiling",
  },
  {
    number: 2,
    description: "Man in white shirt holding one fish while smiling in kayak",
  },
  {
    number: 3,
    description:
      "Man in hat and patterned shirt holding one fish while smiling in kayak",
  },
  {
    number: 4,
    description:
      "Woman in purple jacket holding one fish while smiling in kayak",
  },
  {
    number: 5,
    description:
      "Two young girls holding one fish together while smiling in kayak",
  },
  {
    number: 6,
    description:
      "Woman in black jacket holding one fish while smiling in kayak",
  },
  {
    number: 7,
    description:
      "Man in green shirt and american hat holding one fish while smiling in kayak",
  },
  {
    number: 8,
    description:
      "Man in patterned shirt and fish hat holding one fish while smiling in kayak",
  },
  {
    number: 9,
    description:
      "Man in grey jacket and flip flops holding one fish while smiling in kayak",
  },
  {
    number: 10,
    description:
      "Woman in blue Adidas hat holding one fish while smiling in kayak",
  },
  {
    number: 11,
    description:
      "Young man in grey sweatshirt holding one fish while smirking in kayak",
  },
  {
    number: 12,
    description:
      "Young man in white sweatshirt holding one fish while smiling in kayak",
  },
  {
    number: 13,
    description:
      "Man in white shirt and glasses holding one fish while smirking in kayak",
  },
  {
    number: 14,
    description: "Two red kayaks on lake",
  },
  {
    number: 15,
    description:
      "Man in white sweatshirt and grey Under Armour hat holding one fish while smiling in kayak",
  },
  {
    number: 16,
    description:
      "Man in blue T-shirt and fedora holding one fish while smiling in kayak",
  },
  {
    number: 17,
    description:
      "Young man in red T-shirt and beige hat holding one fish while smiling in kayak",
  },
  {
    number: 18,
    description:
      "Young woman in white tank top holding one fish while smiling on lake shore",
  },
  {
    number: 19,
    description:
      "Young man in grey T-shirt and large sun hat holding one fish while smiling in kayak",
  },
  {
    number: 58,
    description:
      "Young man wearing a white shirt and a red life-jacket holding a fish while smiling on a kayak",
  },
  {
    number: 36,
    description:
      "Middle-aged man in a red-and-black flannel and black hat holding a fish on a kayak while smiling",
  },

  {
    number: 37,
    description:
      "Two men on a kayak; one man on the right is holding a fish and one man on the left is sitting beside him",
  },
  {
    number: 39,
    description:
      "Woman in white grey shirt holding one fish while smiling in kayak",
  },
  {
    number: 40,
    description:
      "One woman on the left in a kayak while smiling and holding a fishing rod; one woman on the right in a kayakk while smiling and holding a fish",
  },
  {
    number: 42,
    description:
      "Older woman in a flannel jacket holding one fish while smiling",
  },

  {
    number: 43,
    description:
      "Woman in a black tank top and black and white hat holding one fish while smirking",
  },

  {
    number: 44,
    description:
      "Young woman in a black jacket and purple life-kacjet holding one fish in a kayak while smirking",
  },
  {
    number: 41,
    description:
      "Young woman in Washington Nationals hat and cheetah-print jacket holding one fish while smiling in kayak",
  },
  {
    number: 45,
    description:
      "Middle-aged man in a black jacket and jeans holding one fish in a kayak while smirking",
  },
  {
    number: 46,
    description:
      "Middle-aged man in a grey fleece and black sunglasses holding one fish in a kayak",
  },
  {
    number: 47,
    description:
      "Boy wearing grey pants holding one fish while smiling in a kayak",
  },
  {
    number: 48,
    description:
      "Middle-aged woman in a grey jacket and green hat holding one fish while smiling in a kayak",
  },
  {
    number: 49,
    description:
      "Man in a black jacket and navy hat holding one fish while smiling in a kayak",
  },
  {
    number: 50,
    description:
      "Man in a black jacket, San Diego hat, and light blue jeans holding one fish while smiling in a kayak",
  },

  {
    number: 52,
    description:
      "Michael Blatt holding fish out of water in a kayak while looking away",
  },
  {
    number: 53,
    description:
      "Michael Blatt holding fish out of water in a kayak while looking forward",
  },
  {
    number: 55,
    description: "Fish in the water with its mouth open",
  },
  {
    number: 54,
    description: "Fish in the water with its mouth open",
  },
  {
    number: 51,
    description:
      "Fish being held out of water with Jackson Kayak text on kayak",
  },
];
