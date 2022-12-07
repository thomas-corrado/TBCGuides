import { Typography } from "@mui/material";

const CompressedTBCLogo = () => {
    return (
      <Typography
        variant="h1"
        component="a"
        className="compressed-tbc-logo"
        sx={{
          display: { xs: "flex", md: "none" },
          fontSize: "4.5rem",
        }}
        color="primary"
      >
        TBC Guides
      </Typography>
    );
};

export default CompressedTBCLogo;
