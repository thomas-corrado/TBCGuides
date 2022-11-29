import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MobileStepperWrapper from "./MobileStepper";

const DescriptionsAndStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stack
        sx={{
          width: "100vw",
          alignItems: "center",
          display: "flex",
        }}
        direction="column"
      >
        <Box
          sx={{
            width: "calc(40vw + 10rem)",
            p: 2,
          }}
        >
          <Stack direction="column" spacing={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  lineHeight: "2rem",
                  fontFamily: "Raleway",
                  textAlign: "center",
                }}
              >
                {steps[activeStep].description}
                <br />
                <br />
                {steps[activeStep].writer}
              </Typography>
            </Box>

            <MobileStepperWrapper
              activeStep={activeStep}
              maxSteps={maxSteps}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default DescriptionsAndStepper;

const steps = [
  {
    writer: "- Caleb D",
    description: `Mike is a terrific fishing guide. I have gone out on my own a bit, but without much luck. Then when Mike and I went out in the Fall, it seemed the fish were simply attracted to us we were getting so many bites. It was an extremely successful trip near the end of the season. Plus, Mike made it a fun time – he clearly knew the perfect type of lures for the area (and could explain why he was recommending that specific lure), had a deep understanding of how different river and weather conditions affect the fish, and made great non-fishing conversation. He came well supplied with all the equipment that we needed and even gave me tips on where to go in the future! Highly recommend a trip with Mike.`,
  },
  {
    writer: "- Nate F",
    description: `I've been fishing with Mike multiple times and he simply knows the Upper Valley and our fish to a 'T.' He spends enough time on the water to know where a fish will be and what it will bite based on the week, temperature, wind direction, etc. - all kinds of factors. He is a great guide no matter the experience of the angler, as I've seen him teach kids brand new to fishing all the way up to experienced anglers like myself. If you're in the area, hire him to get out on a kayak or on the ice to have a great day, catch fish, and learn some new techniques.`,
  },
  {
    writer: "- Howard Z",
    description:
      "My wife and I had a great time fishing with Mike. He was extremely knowledgeable and helpful throughout the entire trip. We caught smallmouth bass, perch, and bluegill and had a great time fishing the entire lake. Definitely would recommend a trip with Mike.",
  },
  {
    writer: "- Mitch R",
    description: `Simply put, Mike exceeded all expectations. My girlfriend and I went for a date night and had a blast! (and obviously caught fish!) All equipment was in exceptional condition, everything was communicated effectively and in a way that makes you feel as if you'd been fishing buddies for years. Can't recommend enough and will definitely be bringing a few friends on another trip at some point!`,
  },
  {
    writer: "- Kelley D",
    description: `Mike worked really hard to find the best fishing spots for us. The equipment was awesome, kayaks were very nice and he’s great. Definitely recommend and look forward to going out again.`,
  },
];
