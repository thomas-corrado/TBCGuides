import FrontPageHeader from "./frontPageHeader";
import Experience from "./experience";
import Adventure from "./adventure";
import Testiomonial from "./testimonial";
import About from "./about";
import Contact from "./contact";
import { Stack, Container, Box } from "@mui/material";
import BackgroundImage from "./backgroundImage";
import WelcomeHeader from "./welcomeHeader";
import HeaderTitle from "./headerTitle";
import DividerWrapper from "./dividerWrapper";
import DescriptionText from "./descriptionText";
import ImageWrapper from "./imageWrapper";
import Image from "next/image";
import SliderWrapper from "./slider";

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
              justifyContent: "center",
            }}
          >
            <BackgroundImage />
            <WelcomeHeader />
          </Box>

          {/* --- */}

          <Box
            style={{
              display: "flex",
              width: "100vw",
              height: "3rem",
              position: "relative",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          />

          <Box
            style={{
              display: "flex",
              width: "100vw",
              height: "auto",
              position: "relative",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <HeaderTitle title="Touring Led by Mike Blatt" />
          </Box>

          <Box
            sx={{
              left: "10vw",
              position: "relative",
              top: "1rem",
              position: "relative",
            }}
          >
            <DividerWrapper widthVar="calc(10rem + 15vw)" />
            <DescriptionText
              text="Mike Blatt is an extremely experienced fisherman with fully certified
          training in Wilderness First Response, as well as Swiftwater Rescue."
            />
          </Box>

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

          <Box
            sx={{
              paddingLeft: "5vw",
              height: "12rem",
              width: "100vw",
              position: "relative",
            backgroundColor: "red", 
            }}
          >
            <DividerWrapper widthVar="calc(90vw)" />
          </Box>

          <Box
            style={{
              display: "flex",
              width: "100vw",
              height: "auto",
              position: "relative",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <HeaderTitle title="An Unforgettable Adventure" />
          </Box>

          <Box
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
          </Box>

          <Box sx={{ position: "relative" }}>
            <ImageWrapper>
              <SliderWrapper />
            </ImageWrapper>
          </Box>

          <Box
            sx={{
              paddingLeft: "5vw",
              height: "3rem",
              width: "100vw",
              position: "relative",
              transform: "translateY(52%)",
            }}
          >
            <DividerWrapper widthVar="calc(90vw)" />
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
        
