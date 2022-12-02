import { Box, Typography } from "@mui/material";
import { styled } from "@washingtonpost/wpds-ui-kit";

const HeaderTitle = ({ title = "" }) => {
  return (
    <Box sx={{ width: "80vw", float: "left" }}>
      <Typography variant="h3" className="introduction-header">{title}</Typography>
    </Box>
  );
};

export default HeaderTitle;
