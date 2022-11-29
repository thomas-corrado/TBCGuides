import { useTheme } from "@mui/material/styles";
import { Button, MobileStepper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const MobileStepperWrapper = ({
  activeStep,
  maxSteps,
  handleNext,
  handleBack,
}) => {

  const theme = useTheme();

  return (
    <>
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
    </>
  );
};

export default MobileStepperWrapper;
