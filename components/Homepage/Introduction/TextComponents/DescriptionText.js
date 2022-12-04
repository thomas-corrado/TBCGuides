import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

const DescriptionText = ({ text = "" }) => {
  return (
    <Stack
      sx={{
        width: "80vw",
      }}
    >
      <Typography
      variant="h6"
      className="introduction-description-text"
      lineHeight={3}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default DescriptionText;
