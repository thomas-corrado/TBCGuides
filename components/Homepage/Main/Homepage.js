import FrontPageHeader from "../../frontPageHeader";
import Experience from "../../experience";
import Adventure from "../../adventure";
import Testiomonial from "../../testimonial";
import About from "../../about";
import Contact from "../../contact";
import { Stack, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import BackgroundImage from "../ImageComponents/BackgroundImage"
import WelcomeHeader from "../TextComponents/WelcomeHeader";
import HeaderTitle from "../TextComponents/HeaderTitle";
import DividerWrapper from "../DividerComponents/DividerWrapper";
import DescriptionText from "../TextComponents/DescriptionText";
import ImageWrapper from "../ImageComponents/ImageWrapper";
import Image from "next/image";
import SliderWrapper from "../ImageComponents/Slider";
import TextBoxHomePage from "../TextComponents/TextboxHomepage";
import ImageAndDividerAndText from "../ImageComponents/ImageAndDividerAndText";

const HomePage = () => {

    return (
      <Box className="homepage-outer-box">
        <FrontPageHeader />
        <Box
          style={{
            display: "flex",
            width: "100vw",
            height: "32rem",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <BackgroundImage />
          <WelcomeHeader />
        </Box>

        <Stack
          direction="column"
          spacing={8}
          mt={6}
          sx={{ alignItems: "center" }}
        >
          <div>
            <ImageAndDividerAndText
              headerTitle="Touring Led by Mike Blatt"
              descriptionText="Mike Blatt is an extremely experienced fisherman with fully certified
        training in Wilderness First Response, as well as Swiftwater Rescue."
            >
              <ImageWrapper>
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  src="https://d14drtvwlopsgs.cloudfront.net/bio.jpg"
                  alt="Harpoon"
                />
              </ImageWrapper>
            </ImageAndDividerAndText>
          </div>

          <Divider
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "90vw",
            }}
          />

          <div>
            <ImageAndDividerAndText
              headerTitle="An Unforgettable Adventure"
              descriptionText="Guests are given a chance to discover more about themselves and the
          world around them. In turn, they become life-long fishers."
            >
              <ImageWrapper>
                <SliderWrapper />
              </ImageWrapper>
            </ImageAndDividerAndText>
          </div>

          <Divider
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "90vw",
            }}
          />

          

          {/* <Box
            sx={{
              left: "10vw",
              position: "relative",
              top: "1rem",
              position: "relative",
            }}
          >
            <DividerWrapper widthVar="calc(10rem + 15vw)" />
            <DescriptionText
              text="Guests are given a chance to discover more about themselves and the
            world around them. In turn, they become life-long fishers."
            />
          </Box> */}

          {/* <Box sx={{ position: "relative" }}>
            <ImageWrapper>
              <SliderWrapper />
            </ImageWrapper>
          </Box> */}
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
        
