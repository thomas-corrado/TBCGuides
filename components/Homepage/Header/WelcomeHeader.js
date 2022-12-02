import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledWelcome = styled("h2", {
  color: "white",
  fontFamily: "livory",
  textAlign: "center",
  position: "absolute",
  zIndex: 3,
});

const WelcomeHeader = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledWelcome className="styled-welcome">
        Welcome to the <br />
        Upper Valley&rsquo;s Premiere <br />
        Kayak, Ice, and Fly
        <br />
        Fishing Guide Service
      </StyledWelcome>
    </Box>
  );
};

export default WelcomeHeader;
