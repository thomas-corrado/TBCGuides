import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";

const CompressedTBCLogo = () => {
    return (
      <Typography
        variant="h2"
        component="a"
        href=""
        sx={{
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "Antonio",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
          left: "2rem",
        }}
        ml={-3}
      >
        TBC Guides
      </Typography>
    );
};

export default CompressedTBCLogo;
