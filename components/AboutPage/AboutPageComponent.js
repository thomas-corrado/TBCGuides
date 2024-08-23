import { Box, Stack } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import VideoAboutPage from "./VideoAboutPage";
import ContactInfo from "../General/Contact/ContactInfo";
import ComeJoinUs from "./ComeJoinUs";
import RatingMain from "./Rating/RatingMain";
import DigitalPub from "./DigitalPub/DigitalPub";
import OutdoorNE from "./ONE/OutdoorNE";
import WatersWeFish from "./WatersWeFish/WatersWeFish";

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
      <DigitalPub />
      <WatersWeFish/>
      <OutdoorNE />
      <ComeJoinUs />
      <ContactInfo />
    </>
  );
};

export default AboutPageComponent;

const pages = ["reservations", "services", "explore"];
