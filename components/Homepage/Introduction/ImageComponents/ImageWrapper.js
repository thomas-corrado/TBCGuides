import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledMichaelImageBox = styled(Box, {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100vw",
  height: "calc(50rem - (30rem - 20vw))",
  overflow: "hidden",
});

const StyledMichaelImageBoxTwo = styled(Box, {
  width: "80vw",
  height: "calc(50rem - (30rem - 20vw))",
  position: "relative",
});

const ImageWrapper = ({ children }) => {
  return (
    <StyledMichaelImageBox>
      <StyledMichaelImageBoxTwo>
        {children}
      </StyledMichaelImageBoxTwo>
    </StyledMichaelImageBox>
  );
};

export default ImageWrapper