import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

const TBCLogo = ({ pages }) => {
  const router = useRouter(); 
    return (
      <>
        {pages.includes("home") ? (
          <Button
            onClick={() => router.push("/")}
            
            sx={{
              display: { xs: "none", md: "flex" },
              
            }}
          >
            <Box sx={{ width: "5rem" }}>
              <Typography
                className="tbc-logo"
                sx={{
                  fontSize: "5rem",
                  display: { xs: "none", md: "flex" },
                  lineHeight: "5rem",
                  fontFamily: "Antonio",
                  textAlign: "left",
                  textTransform: 'none'
                }}
                color={pages.includes("home") ? "secondary" : "primary"}
              >
                TBC Guides
              </Typography>
            </Box>
          </Button>
        ) : (
          <Box sx={{ width: "1rem" }}>
            <Typography
              className="tbc-logo"
              sx={{
                fontSize: "5rem",
                display: { xs: "none", md: "flex" },
                lineHeight: "5rem",
                fontFamily: "Antonio",
                textAlign: "left",
              }}
              color={pages.includes("home") ? "secondary" : "primary"}
            >
              TBC Guides
            </Typography>
          </Box>
        )}
      </>
    );
};

export default TBCLogo;
