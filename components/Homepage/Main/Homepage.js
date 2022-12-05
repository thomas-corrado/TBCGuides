import { Stack, Box } from "@mui/material";
import HomepageHeader from "../Header/HomepagerHeader";
import Introduction from "../Introduction/Introduction";
import Testimonials from "../Testimonial/Testimonials";
import Activity from "../Activity/Activity";
import ContactInfo from "../Contact/ContactInfo";

const HomePage = () => {

    return (
      <Box className="homepage-outer-box" sx={{ backgroundColor: "#596d90" }}>
        <HomepageHeader />
        <Stack
          direction="column"
          spacing={5}
          mt={6}
          sx={{ alignItems: "center" }}
        >
          <Introduction />

          <Testimonials />
        </Stack>
        <Activity />
        <ContactInfo />
      </Box>
    );
}

export default HomePage

// Whole Page
    // Stack
        // Box
            // Image
                // Text
        // LargeDivider
        // Stack
            // Title
            // SmallDivider
            // Description
            // Image
        // Large Divider
        // Stack
            // Title
            // SmallDivider
            // Description
            // Image
        // Stack
            // Image
            // Slider
        // Stack
            // Image
            // Title
            // Divider
            // Text
        // Grid
            // Three Things
    // Stack
// Whole Page
        
