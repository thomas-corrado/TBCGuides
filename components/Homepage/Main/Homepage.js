import { Box } from "@mui/material";
import HomepageHeader from "../Header/HomepagerHeader";
import ContactInfo from "../../General/Contact/ContactInfo";
import MikeInfo from "../MikeInfo/MikeInfo";
import Philosophy from "../Philosophy/Philosophy";
import License from "../License/License";
import Suggestion from "../Suggestion/Suggestion";

const HomePage = () => {
  return (
    <Box className="homepage-outer-box" sx={{ backgroundColor: "#596d90" }}>
      <HomepageHeader />
      <MikeInfo />

      <License />
      <Philosophy />
      <Suggestion />
      <ContactInfo />
    </Box>
  );
};

export default HomePage;
