import { Box, Typography } from "@mui/material";

const TBCLogo = () => {
    return (
      <Box sx={{ width: "1rem" }} >
        <Typography
          variant="h1"
          className="tbc-logo"
          sx={{
            fontSize: '5rem', 
            display: { xs: "none", md: "flex" },
          }}
          color="primary"
        >
          TBC Guides
        </Typography>
      </Box>
    );
};

export default TBCLogo;
