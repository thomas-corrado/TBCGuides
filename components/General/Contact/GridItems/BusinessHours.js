import { useRouter } from "next/router";
import { Stack, IconButton, Typography, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";


const BusinessHours = () => {
  const router = useRouter(); 

  return (
    <Grid
      item
      container
      lg={3}
      sm={6}
      xs={6}
      sx={{
        justifyContent: { lg: "center" },
        paddingLeft: { xs: "5vw" },
      }}
    >
      <Stack direction="column">
        <Typography variant="h7" className="contact-item">
          Business Hours
        </Typography>
        <Typography variant="h8" className="contact-item" mb={1}>
          Sun-Sat: 7:00 AM - 7:00 PM
        </Typography>

        <Stack direction="row" spacing={2} mb={8}>
          <IconButton
            onClick={() => router.push(`https://www.instagram.com/tbcguides/`)}
            className="contact-icon-button"
            color="primary"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() =>
              router.push(`https://www.facebook.com/TheBlattCave/`)
            }
            className="contact-icon-button"
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default BusinessHours;
