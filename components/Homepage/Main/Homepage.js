import FrontPageHeader from "../../frontPageHeader";
import Testimonials from "../Testimonial/Testimonials";
// import Experience from "../../experience";
// import Adventure from "../../adventure";
// import Testiomonial from "../../testimonial";
// import About from "../../about";
// import Contact from "../../contact";
import { Stack, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import BackgroundImage from "../Header/BackgroundImage";
import WelcomeHeader from "../Header/WelcomeHeader";
// import HeaderTitle from "../Introduction/TextComponents/HeaderTitle";
// import DividerWrapper from "../Introduction/DividerComponents/DividerWrapper";
// import DescriptionText from "../Introduction/TextComponents/DescriptionText";
// import ImageWrapper from "../Introduction/ImageComponents/ImageWrapper";
// import Image from "next/image";
// import SliderWrapper from "../ImageComponents/Slider";
// import TextBoxHomePage from "../Introduction/TextComponents/TextboxHomepage";
// import ImageAndDividerAndText from "../ImageComponents/ImageAndDividerAndText";
import Introduction from "../Introduction/Introduction";
import Activity from "../Activity/Activity";
import HomepageHeader from "../Header/HomepagerHeader";

const HomePage = () => {

    return (
      <Box className="homepage-outer-box" sx={{ backgroundColor: "#596d90" }}>
        <HomepageHeader />
        {/* <FrontPageHeader /> */}
        {/* <Box
          style={{
            display: "flex",
            width: "100vw",
            height: "32rem",
            position: "relative",
            justifyContent: "center",
          }}
        > */}
        {/* <BackgroundImage />
          <WelcomeHeader /> */}
        {/* </Box> */}

        <Stack
          direction="column"
          spacing={6}
          mt={6}
          sx={{ alignItems: "center" }}
        >
          <Introduction />

          

          <Testimonials />
        </Stack>
        <Activity />

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
        
