import { InstagramEmbed } from "react-social-media-embed";
import { Box, Stack, Button, Grid, Typography } from "@mui/material";

const InstagramWidget = () => {
  return (
    <>
      <Box className="instagram-box">
        <Box sx={{ width: { xs: "90vw", textAlign: "center" } }} mt={5}>
          <Stack>
            <Typography variant="h2_about" mb={4}>
              Follow us on Instagram
            </Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              mb={3}
            >
              <InstagramEmbed
                url="https://www.instagram.com/tbcguides/?utm_source=ig_embed&amp;utm_campaign=loading"
                width={328}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default InstagramWidget


