import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ServicesImageGallery from "./ServicesImageGallery";

const GeneralServiceComponent = ({ Title, MainImageURL, MainImageDescription, Description, itemData, itemPrelim, itemFormat }) => {
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
            {Title}
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
              src={MainImageURL}
              alt={MainImageDescription}
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
            <Typography
              variant="h5_pontoon"
              mt={3}
              mb={2}
              dangerouslySetInnerHTML={{ __html: Description }}
            ></Typography>
          </Box>

          <Box
            mb={{ xs: 6, md: itemData !== "" ? 5 : 0 }}
            mt={{ xs: 0, md: itemData !== "" ? 1 : 0 }}
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
          <ServicesImageGallery
            image_prelim={itemPrelim}
            image_array={itemData}
            image_format={itemFormat}
          />
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default GeneralServiceComponent;

const pages = ["about", "reservations", "services", "explore"];

