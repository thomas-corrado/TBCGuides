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
        <Typography variant="h6" className="contact-item">
          Business Hours
        </Typography>
        <Typography className="contact-item" mb={1}>
          Sun-Sat: 7:00 AM - 7:00 PM
        </Typography>

        <Stack direction="row" spacing={2} mb={8}>
          <IconButton
            onClick={() => router.push(`https://www.instagram.com/tbcguides/`)}
            className="contact-icon-button"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
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

const weekHours = ["Mon: 7:00 AM – 7:00 PM", 
"Tues: 7:00 AM – 7:00 PM", 
"Wed: 7:00 AM – 7:00 PM", 
"Thurs: 7:00 AM – 7:00 PM",
"Fri: 7:00 AM – 7:00 PM", 
"Sat: 7:00 AM – 7:00 PM", 
"Sun: 7:00 AM – 7:00 PM"]