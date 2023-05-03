import { Stack, Box, Typography } from "@mui/material";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExploreLanding = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
      mt={5}
    >
      <Box
        sx={{
          width: { xs: "80vw", sm: "85vw" },
          justifyContent: "center",
          position: "relative",
          display: "flex",
        }}
        mt={{ xs: 3, md: 7 }}
        mb={{ lg: 2}}
      >
        <Stack
          direction="column"
          sx={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h2_about">Eat. Sleep. Drink.</Typography>

          <Box
            mt={2}
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography
              variant="h4_explore"
              sx={{
                
                textAlign: "center",
              }}
              mt={{ xs: 2, md: 1 }}
              mr={{ md: 0, lg: 0 }}
            >
              Some of our favorite spots when we&#39;re not fishing.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ExploreLanding;
