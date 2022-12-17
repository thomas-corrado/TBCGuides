import { Box, Stack } from "@mui/material";
import Image from "next/image";
import TestimonialTitleText from "./HeaderText/TestimonialTitleText";
import DescriptionsAndStepper from "./Stepper/DescriptionsAndStepper";

const Testimonials = () => {
  return (
    <>
      <Box className="testimonial-outer-box">
        <Box className="testimonial-inner-box">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
            // src="https://d14drtvwlopsgs.cloudfront.net/weave.jpeg"
            alt="Harpoon"
            sx={{
              zIndex: 0,
            }}
          />
        </Box>
        <Stack
          mt={10}
          mb={10}
          className="testimonial-stack"
          direction="column"
          spacing={2}
        >
          <TestimonialTitleText />
          <DescriptionsAndStepper />
        </Stack>
      </Box>
    </>
  );
};

export default Testimonials;
