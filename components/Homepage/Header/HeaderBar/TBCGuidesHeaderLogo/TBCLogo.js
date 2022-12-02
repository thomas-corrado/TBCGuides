import { Box, Typography } from "@mui/material";

const TBCLogo = () => {
    return (
      <Box sx={{ width: "1rem" }} ml={3}>
        <Typography
          variant="h2"
          className="tbc-logo"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
          }}
        >
          TBC Guides
        </Typography>
      </Box>
    );
};

export default TBCLogo;
