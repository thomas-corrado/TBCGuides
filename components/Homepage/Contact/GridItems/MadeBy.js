import { useRouter } from "next/router";
import { Stack, Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MadeBy = ({
  descriptionOne,
}) => {

  const router = useRouter(); 
  return (
    <Grid
      item
      container
      lg={3}
      sm={12}
      xs={6}
      mr={-7}
      sx={{
        justifyContent: { lg: "center" },
        paddingLeft: { xs: "5vw" },
      }}
    >
      <Stack direction="column" spacing={1}>
        <Typography variant="h7" className="contact-item">
          {descriptionOne}
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton
            className="contact-icon-button"
            onClick={() => router.push(`https://github.com/thomas-corrado`)}
            color="primary"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            className="contact-icon-button"
            onClick={() =>
              router.push(`https://www.linkedin.com/in/thomas-corrado/`)
            }
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default MadeBy;
