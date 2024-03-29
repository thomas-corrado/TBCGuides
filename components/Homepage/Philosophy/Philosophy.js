import { Stack, Grid, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const Philosophy = () => {
    const router = useRouter(); 
    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <Box>
        <Grid
          // data-aos="fade-up"
          container
          direction="row"
          rowSpacing={4}
          mt={{ xs: 2, sm: 2, lg: 16 }}
          mb={{ xs: 8, sm: 8, lg: 20 }}
        >
          <Grid item container lg={7} md={12} sm={12} xs={12}>
            <Typography
              variant="h4"
              color="primary"
              ml={{ xs: 4, sm: 4, md: 6, lg: 8 }}
              sx={{ width: { xs: "80%", sm: "80%", md: "80%", lg: "100%" } }}
            >
              By providing instruction on each trip, TBC fishing experiences
              give guests the chance to become lifelong fishers.
            </Typography>
          </Grid>

          <Grid
            item
            container
            lg={4}
            md={12}
            sm={12}
            xs={12}
            ml={{ xs: 4, sm: 4, md: 6, lg: 8 }}
            sx={{ justifyContent: { xs: "none", lg: "center" } }}
          >
            <Stack
              direction="column"
              sx={{ justifyContent: "center" }}
              spacing={1}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                >
                  Learn more about what a <br /> day with TBC Guides is like.
                </Typography>
              </Box>

              <Button
                disableRipple
                variant="contained"
                sx={{
                  borderRadius: "0",
                  padding: "1rem",
                 
                }}
                onClick={() => router.push("/about")}
              >
                <Typography
                  variant="h6"
                  color="tbcblue"
                  
                >
                  Learn More
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
}

export default Philosophy