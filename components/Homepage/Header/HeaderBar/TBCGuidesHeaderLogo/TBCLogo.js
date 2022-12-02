import { Box, Typography } from "@mui/material";

const TBCLogo = () => {
    return (
      <Box sx={{ width: "1rem" }} ml={3}>
        <Typography
          variant="h2"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Antonio",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          TBC Guides
        </Typography>
      </Box>
    );
};

export default TBCLogo;
