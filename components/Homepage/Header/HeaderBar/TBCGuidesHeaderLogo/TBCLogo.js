import { Box, Typography } from "@mui/material";

const TBCLogo = ({ pages }) => {
    return (
      <Box sx={{ width: "1rem" }}>
        <Typography
          className="tbc-logo"
          sx={{
            fontSize: "5rem",
            display: { xs: "none", md: "flex" },
            lineHeight: "5rem",
            fontFamily: "Antonio",
          }}
          color={pages.includes("home") ? "secondary" : "primary"}
        >
          TBC Guides
        </Typography>
      </Box>
    );
};

export default TBCLogo;
