import { Stack, Grid, Typography, Button, Box , Avatar} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const License = () => {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#6f7789" }}>
      <Grid
        // data-aos="fade-up"
        container
        direction="row"
        rowSpacing={1}
        columnSpacing={8}
      >
        <Grid
          item
          container
          lg={6}
          md={6}
          sm={12}
          xs={12}
          mt={{ xs: 6, sm: 6, md: 0, lg: 0 }}
          sx={{
            justifyContent: "right",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "right",
              display: "flex",
            }}
          >
            <Button
              aria-label="new-hampshire-license-button"
              onClick={() =>
                router.push(
                  "https://www.wildlife.state.nh.us/law-enforcement/guides.html"
                )
              }
              sx={{
                width: { xs: "100%", sm: "100", md: "45%" },
                height: { xs: "80vw", sm: "50vw", md: "100%" },
                justifyContent: "right",
                "&:hover": {
                  backgroundColor: "transparent",
                  filter: "brightness(.85)",
                },
              }}
              disableFocusRipple
              startIcon={
                <Image
                  priority
                  fill
                  style={{ objectFit: "contain" }}
                  quality={100}
                  src="https://s3.amazonaws.com/tbcguides.fish/LICENSED-GUIDE.png"
                  alt="new hampshire fishing license logo"
                  loading="eager"
                  sx={{
                    "&:hover": {},
                  }}
                ></Image>
              }
            ></Button>
          </Box>

         
        </Grid>
        <Grid
          item
          container
          lg={6}
          md={6}
          sm={12}
          xs={12}
          mt={{ xs: 2, sm: 2, md: 8, lg: 16 }}
          mb={{ xs: 4, sm: 4, md: 12, lg: 20 }}
          sx={{ justifyContent: { xs: "center", sm: "center", md: "left" } }}
        >
          <Typography
            variant="h4"
            color="primary"
            sx={{
              width: { xs: "80%", sm: "80%", md: "80%", lg: "50%" },
              position: "relative",
              textAlign: { xs: "center", sm: "center", md: "left" },
            }}
          >
            Trips available in both New Hampshire and Vermont
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default License;
