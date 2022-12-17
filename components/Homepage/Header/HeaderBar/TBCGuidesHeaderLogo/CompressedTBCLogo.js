import { Typography } from "@mui/material";

const CompressedTBCLogo = ({ pages}) => {
    return (
      <Typography
        className="compressed-tbc-logo"
        sx={{
          display: { xs: "flex", md: "none" },
          fontSize: "4.5rem",
          lineHeight: "4.5rem",
          fontFamily: "Antonio",
        }}
        color={pages.includes("home") ? "secondary" : "primary"}
      >
        TBC Guides
      </Typography>
    );
};

export default CompressedTBCLogo;
