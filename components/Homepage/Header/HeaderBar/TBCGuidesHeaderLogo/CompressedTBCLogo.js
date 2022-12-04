import { Typography } from "@mui/material";

const CompressedTBCLogo = () => {
    return (
      <Typography
        variant="h2"
        component="a"
        className="compressed-tbc-logo"
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        ml={-3}
        color="primary"
      >
        TBC Guides
      </Typography>
    );
};

export default CompressedTBCLogo;
