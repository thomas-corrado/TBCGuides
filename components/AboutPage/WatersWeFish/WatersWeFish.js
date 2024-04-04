import { Typography, Grid, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WatersWeFish = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();

  return (
    <>
      <Box className="waters-box" backgroundColor="#BDC0C5">
        <Box sx={{ width: { xs: "80vw", sm: "85vw" } }}>
          <Grid container direction="row" sx={{ alignItems: "center" }}>
            <Grid container item lg={8} xl={8} direction="column" mt={8} mb={6}>
              <Typography variant="h2_about" mb={2}>
                Waters we Fish
              </Typography>
              <Grid container item direction="column" ml={1}>
                <Typography variant="h3_about" fontWeight="bold" mb={2}>
                  Bodies of Water
                </Typography>
                <Typography variant="h4_about">
                  Connecticut River <br></br> Lake Morey <br></br> Lake Fairlee{" "}
                  <br></br>
                  Squam Lake <br></br>Webster Lake <br></br>Lake Winnipesaukee
                  <br></br>
                  Lake Sunapee
                </Typography>
                <Typography variant="h3_about" fontWeight="bold" mb={2} mt={2}>
                  We also fish other smaller water bodies in towns throughout
                  Vermont and New Hampshire
                </Typography>
                <Grid
                  container
                  item
                  mt={1}
                  rowSpacing={4}
                  
                >
                  <Typography variant="h4_about"  mr={8}>
                    Fairlee, Vermont <br></br>
                    Killington, Vermont <br></br>
                    Woodstock, Vermont <br></br>
                    Quechee, Vermont <br></br>
                    Windsor, Vermont <br></br>
                    Norwich, Vermont <br></br>
                  </Typography>
                  <Typography variant="h4_about">
                    Hanover, New Hampshire <br></br> Lebanon, New Hampshire{" "}
                    <br></br>Lyme, New Hampshire <br></br> Orford, New Hampshire{" "}
                    <br></br>New London, New Hampshire <br></br>Franklin, New
                    Hampshire
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default WatersWeFish;
