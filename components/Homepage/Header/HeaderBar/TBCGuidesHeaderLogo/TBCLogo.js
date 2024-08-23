import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

const TBCLogo = ({ pages }) => {
  const router = useRouter(); 
    return (
      <Box sx={{ flexGrow: { xs: 0, sm: 1 } }}>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: "15.8rem",
            height: "9rem",
            float: "left",
          }}
        >
          <Button
            aria-label="tbc-guides-logo-button"
            onClick={() => router.push("/")}
            sx={{
              width: "100%",
              justifyContent: "left",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            {pages.includes("home") ? (
              <Image
                priority
                fill
                style={{
                  objectFit: "cover",
                }}
                quality={100}
                src="https://s3.amazonaws.com/tbcguides.fish/TBC_New_Logo_2024_White.PNG"
                alt="white tbc guides logo"
                loading="eager"
              ></Image>
            ) : (
              <Image
                priority
                fill
                style={{
                  objectFit: "cover",
                  justifyContent: "left",
                }}
                quality={100}
                src="https://s3.amazonaws.com/tbcguides.fish/TBC_New_Logo_2024.PNG"
                alt="black tbc guides logo"
                loading="eager"
                sx={{
                  "&:hover": {},
                }}
              ></Image>
            )}
          </Button>
        </Box>
      </Box>
    );
};

export default TBCLogo;
