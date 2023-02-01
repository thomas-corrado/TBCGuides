import { Box, Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ComeJoinUs = () => {
    const router = useRouter(); 

    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <Box>
        <Box className="come-join-us-outer-box">
          <Stack
            direction="column"
            className="come-join-us-outer-stack"
            spacing={{ xs: 4, sm: 4, md: 6 }}
            mb={12}
            // data-aos="fade-up"
          >
            <Typography
              mt={12}
              color="primary"
              variant="h2_about"
              sx={{ textAlign: "center" }}
            >
              Ready to start your fishing journey?
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              sx={{ mminWidth: 0 }}
              onClick={() => router.push(`/reservations`)}
            >
              <Typography variant="h3_about">Make a Reservation</Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    );
}

export default ComeJoinUs
