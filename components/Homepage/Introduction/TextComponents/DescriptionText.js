import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";

const DescriptionText = ({ text="",  }) => {

    return (
      <Stack
        sx={{
          width: "80vw",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "1.3rem",
            fontFamily: "Raleway",
            lineHeight: "3rem",
          }}
        >
          {text}
        </Typography>
      </Stack>
    );
}

export default DescriptionText