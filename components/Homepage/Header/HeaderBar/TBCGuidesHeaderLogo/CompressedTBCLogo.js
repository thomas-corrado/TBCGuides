import { Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CompressedTBCLogo = ({ pages}) => {
  const router = useRouter(); 
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            width: "6.6rem",
            height: "9rem",
            float: "left",
          }}
        >
          <Button
            aria-label="angler-hook-button"
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
                src="https://s3.amazonaws.com/tbcguides.fish/Black-Small-Logo.png"
                alt="black angler hook"
                loading="eager"
              ></Image>
            ) : (
              <Image
                priority
                fill
                style={{
                  objectFit: "cover",
                }}
                quality={100}
                src="https://s3.amazonaws.com/tbcguides.fish/White-Small-Logo.png"
                alt="white angler hook"
                loading="eager"
              ></Image>
            )}
          </Button>
        </Box>
      </Box>
    );
};

export default CompressedTBCLogo;
