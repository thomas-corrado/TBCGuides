import { Typography, Grid, Button, Box } from "@mui/material"
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OutdoorNE = () => {
     useEffect(() => {
       AOS.init();
     }, []);

     const router = useRouter()

    return (
      <>
        <Box className="outdoor-box">
          <Box sx={{ width: { xs: "80vw", sm: "85vw" } }}>
            <Grid container direction="row" sx={{ alignItems: "center" }}>
              <Grid
                container
                item
                lg={8}
                xl={8}
                direction="column"
                mt={8}
                mb={{ md: 0, lg: 8 }}
              >
                <Typography variant="h2_about" mb={2} >
                  Looking for your own kayak?
                </Typography>
                <Typography variant="h3_about" >
                  Check out Outdoor New England
                </Typography>
              </Grid>
              <Grid
                container
                item
                lg={4}
                xl={4}
                mt={{ xs: 4, sm: 4, md: 4, lg: 8 }}
                mb={8}
                sx={{ justifyContent: { md: "left", lg: "center" } }}
              >
                <Button
                  variant="contained"
                  color="onegreen"
                  disableElevation={false}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#146b3e",
                    },
                  }}
                  onClick={() => router.push("https://outdoornewengland.com/")}
                >
                  <Typography
                    variant="h1_about"
                    color="primary"
                    sx={{ lineHeight: "calc(3.5rem + 5vw)" }}
                  >
                    ONE
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </>
    );
}

export default OutdoorNE