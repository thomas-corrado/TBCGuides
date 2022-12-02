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
        sx={{
          color: "white",
          fontSize: "1.3rem",
          fontFamily: "belda-normal",
          lineHeight: "3rem",
          fontStyle: "italic",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default DescriptionText;
