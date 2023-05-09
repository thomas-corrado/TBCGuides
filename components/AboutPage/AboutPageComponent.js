import { Box, Stack } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import VideoAboutPage from "./VideoAboutPage";
import ContactInfo from "../General/Contact/ContactInfo";
import ComeJoinUs from "./ComeJoinUs";
import RatingMain from "./Rating/RatingMain";
import Gear from "./Gear/Gear";
import OutdoorNE from "./ONE/OutdoorNE";

const AboutPageComponent = () => {
  return (
    <>
      <Stack className="about-stack" direction="column">
        <NavigationBarNonHome pages={pages} />
        <Box className="nav-and-video-box">
          <VideoAboutPage />
        </Box>
      </Stack>
      <RatingMain />
      {/* <Gear /> */}
      <OutdoorNE/>
      <ComeJoinUs />
      <ContactInfo />
    </>
  );
};

export default AboutPageComponent;

const pages = ["home", "reservations", "explore", "gallery"];
