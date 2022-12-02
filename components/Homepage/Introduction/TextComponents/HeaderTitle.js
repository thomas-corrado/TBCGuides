import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledHeaderTitle = styled("h3", {
  color: "white",
  position: "relative",
  fontSize: "2.5rem",
  zIndex: 3,
  fontFamily: "belda-normal",
  margin: 0,
  paddingTop: 0,
  lineHeight: "2.5rem",
});

const HeaderTitle = ({ title = "" }) => {
  return (
    <Box sx={{ width: "80vw", float: "left" }}>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </Box>
  );
};

export default HeaderTitle;
