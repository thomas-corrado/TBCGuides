// Image by rawpixel.com
  
import * as React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    writer: "- Mitch R",
    description: `Simply put, Mike exceeded all expectations. My girlfriend and I went for a date night and had a blast! (and obviously caught fish!) All equipment was in exceptional condition, everything was communicated effectively and in a way that makes you feel as if you'd been fishing buddies for years. Can't recommend enough and will definitely be bringing a few friends on another trip at some point!`,
  },
  {
    writer: "- Tommy C",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    writer: "- John D",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const Testiomonial = () => {

    const [state, setState] = useState({
      mobileView: false,
    });

    const { mobileView } = state;

    const [innerWidth, setInnerWidth] = React.useState(0);

    useEffect(() => {
      const setResponsiveness = () => {
        setInnerWidth(window.innerWidth);
        return window.innerWidth < 423
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };

      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());

      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const StyledDesktopTestimonialBox = styled(Box, {
      width: "100vw",
      height: "auto",
      position: "absolute",
      top:
      innerWidth > 1485 ? "156rem" :
        innerWidth > 1306
          ? "158rem"
          : innerWidth > 1269
          ? "160rem"
          : innerWidth > 752
          ? "164rem"
          : innerWidth > 751
          ? "169rem"
          : innerWidth > 558 
          ? "154rem"
          : innerWidth > 527
          ? "157rem"
          : innerWidth > 500
          ? "143rem"
          : innerWidth > 484
          ? "142rem"
          : innerWidth > 440
          ? "142rem"
          : innerWidth > 388
          ? "135rem" : innerWidth > 375 ? "138rem" 
          : innerWidth > 339
          ? "140rem"
          : "142rem",
      paddingBottom: "4rem"
    });

    const StyledDividerBoxOne = styled("div", {
      position: "absolute",
      display: "flex",
      left: "5vw",
    });

    const StyledWeaveImageBox = styled(Box, {
      display: "flex",
      justifyContent: "center",
      width: "100vw",
      overflow: "hidden",
      position: "absolute",
      top: "3.5rem",
    });

    const StyledWeaveImageBoxTwo = styled(Box, {
      width: "100vw",
      height: "100%",
      position: "absolute",
      opacity: .2,
    });

    const StyledHeaderBox = styled(Box, {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      textAlign: "center", 
      postition: "absolute",
      fontSize: innerWidth > 440 ? "2.5rem" : "2rem",
      fontFamily: "Raleway", 
      opacity: 1, 
      marginTop: "9rem"
    });

    const StyledDividerBoxTwo = styled(Box, {
      position: "absolute",
      display: "flex",
      width: "100vw", 
      justifyContent: "center", 
      marginTop: "2rem"
    });

    const StyledPaginationBox = styled(Box, {
      position: "absolute",
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      marginTop: innerWidth > 527 ? "5rem" : "3rem",
      fontFamily: "Raleway",
      fontSize: "1.2rem",
      lineHeight: "2rem",
      textAlign: "center",
    });


    return (
      <StyledDesktopTestimonialBox className="outer">
        <style global jsx>{`
          .headerBox {
            z-index: 2;
          }

          .weaveBox {
            z-index: -1;
            height: 52rem;
          }

          @media (max-width: 425px) {
            .weaveBox {
              height: 56rem;
            }
          }

          @media (max-width: 324px) {
            .weaveBox {
              height: 58rem;
            }
          }

          @media (max-width: 296px) {
            .weaveBox {
              height: 59rem;
            }
          }
        `}</style>
        <StyledDividerBoxOne>
          <Divider
            sx={{
              width: "90vw",
            }}
          />
        </StyledDividerBoxOne>
        <StyledHeaderBox className="headerBox">
          Loved by <br /> Every Client
        </StyledHeaderBox>

        <StyledDividerBoxTwo>
          <Divider
            sx={{
              width: "15vw",
              backgroundColor: "black",
            }}
          />
        </StyledDividerBoxTwo>

        <StyledPaginationBox>
          <Box sx={{ maxWidth: innerWidth > 425 ? 500 : 350, flexGrow: 1 }}>
            <Box
              sx={{
                width: "100%",
                p: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {steps[activeStep].description}
              <br />
              <br />
              {steps[activeStep].writer}
            </Box>
            <MobileStepper
              sx={{
                backgroundColor: "transparent",
              }}
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  sx={{
                    fontFamily: "Raleway",
                    color: "black",
                  }}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{
                    fontFamily: "Raleway",
                    color: "black",
                  }}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </StyledPaginationBox>

        <StyledWeaveImageBox className="weaveBox">
          <StyledWeaveImageBoxTwo className="weaveBox">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://d14drtvwlopsgs.cloudfront.net/weave.jpeg"
              alt="Harpoon"
            />
          </StyledWeaveImageBoxTwo>
        </StyledWeaveImageBox>
      </StyledDesktopTestimonialBox>
    );
}

export default Testiomonial