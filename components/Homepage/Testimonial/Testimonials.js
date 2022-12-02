import { Box, Stack } from "@mui/material";
import Image from "next/image";
import TestimonialHeader from "./Header/TestimonialHeader";
import DescriptionsAndStepper from "./Stepper/DescriptionsAndStepper";

const Testimonials = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          backgroundColor: "white",
        }}
       
      >
        <Box
          sx={{
            opacity: 0.2,
          }}
        >
          <Image
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
            src="https://d14drtvwlopsgs.cloudfront.net/weave.jpeg"
            alt="Harpoon"
            sx={{
              zIndex: 0,
            }}
          />
        </Box>
        <Stack
          mt={10}
          mb={10}
          sx={{
            width: "100vw",
            fontFamily: "livory",
            zIndex: 1,
          }}
          direction="column"
          spacing={2}
        >
          <TestimonialHeader />
          <DescriptionsAndStepper />
        </Stack>
      </Box>
    </>
  );
};

export default Testimonials;
