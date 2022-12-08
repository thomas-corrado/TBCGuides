import { Stack, Box } from "@mui/material";
import HomepageHeader from "../Header/HomepagerHeader";
import Introduction from "../Introduction/Introduction";
import LifelongSection from "../Lifelong/LifelongSection";
import Testimonials from "../Testimonial/Testimonials";
import Activity from "../Activity/Activity";
import ContactInfo from "../Contact/ContactInfo";
import MikeInfo from "../MikeInfo/MikeInfo";
import Philosophy from "../Philosophy/Philosophy";
import Suggestion from "../Suggestion/Suggestion";


const HomePage = () => {
  
    

    return (
      <Box className="homepage-outer-box" sx={{ backgroundColor: "#596d90" }}>
        <HomepageHeader />
        
          <MikeInfo />
       

        <Philosophy />
        <Suggestion/>
        <Stack direction="column" spacing={5} sx={{ alignItems: "center" }}>
          <Testimonials />
        </Stack>
        <Activity />
        <ContactInfo />
      </Box>
    );
}

export default HomePage

        
