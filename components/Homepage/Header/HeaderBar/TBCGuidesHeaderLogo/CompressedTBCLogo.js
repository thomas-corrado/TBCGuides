import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const CompressedTBCLogo = ({ pages}) => {
  const router = useRouter(); 
    return (
      <>
        {pages.includes("home") ? (
          <Button
            onClick={() => router.push("/")}
            className="compressed-tbc-logo"
            sx={{
              display: { xs: "flex", md: "none" },
              fontSize: "4.5rem",
              lineHeight: "4.5rem",
              fontFamily: "Antonio",
              textAlign: "left",
            }}
          >
            <Typography
              className="compressed-tbc-logo"
              sx={{
                display: { xs: "flex", md: "none" },
                fontSize: "4.5rem",
                lineHeight: "4.5rem",
                fontFamily: "Antonio",
                textAlign: "left",
                textTransform: "none",
              }}
              color={pages.includes("home") ? "secondary" : "primary"}
            >
              TBC Guides
            </Typography>
          </Button>
        ) : (
          <Typography
            className="compressed-tbc-logo"
            sx={{
              display: { xs: "flex", md: "none" },
              fontSize: "4.5rem",
              lineHeight: "4.5rem",
              fontFamily: "Antonio",
              textAlign: "left",
            }}
            color={pages.includes("home") ? "secondary" : "primary"}
          >
            TBC Guides
          </Typography>
        )}
      </>
    );
};

export default CompressedTBCLogo;
