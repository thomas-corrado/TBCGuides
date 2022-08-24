import FrontPageHeader from "./frontPageHeader";
import Experience from "./experience";
import Adventure from "./adventure";
import Testiomonial from "./testimonial";
import About from "./about";
import Contact from "./contact";
import { Stack, Avatar, Container, Box } from "@mui/material";
import BackgroundImage from "./backgroundImage";
import WelcomeHeader from "./welcomeHeader";

const HomePage = () => {

    return (
      <Box className="homepage-outer-box">
        <Stack direction="column">
          <FrontPageHeader />

          <Box
            style={{
              display: "flex",
              width: "100vw",
              height: "32rem",
              position: "relative",
              justifyContent: "center"
            }}
          >
            <BackgroundImage />
            <WelcomeHeader />
          </Box>
        </Stack>

        {/* <Experience />
        <Adventure />
        <Testiomonial />
        <About />
        <Contact /> */}
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
        
