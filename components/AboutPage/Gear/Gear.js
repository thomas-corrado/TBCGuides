import { Stack, Box, Typography } from "@mui/material";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gear = () => {
      useEffect(() => {
        AOS.init();
      }, []);

    return (
     
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            backgroundColor: "#D9D9D9",
          }}
          mt={3}
        >
          <Box sx={{ width: { xs: "80vw", sm: "85vw" } }} mt={7} mb={7}>
            <Stack direction="column">
              <Typography variant="h2_about" data-aos="fade-up">
                Gear
              </Typography>
              <Typography data-aos="fade-up" variant="h4_about" mt={2}>
                TBC guides will provide everything you need for your experience;
                however, if you are looking to add anything to your tackle box,{" "}
                <Link
                  href="https://www.curated.com/e/mike.blatt"
                  className="curated"
                >
                  click here
                </Link>{" "}
                and Mike can help you out.
              </Typography>
            </Stack>
          </Box>
        </Box>
      
    );
}

export default Gear 