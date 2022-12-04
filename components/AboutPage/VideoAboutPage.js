import { Box, Stack } from "@mui/material";

const VideoAboutPage = () => {
  return (
    <Stack className="video-outside-box" mt={6} mb={8}>
      <Box className="video-inside-box">
        <video
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          preload="metadata"
        >
          <source
            src="https://d14drtvwlopsgs.cloudfront.net/about-video.mp4#t=0.5"
            type="video/mp4"
          />
        </video>
      </Box>
    </Stack>
  );
};

export default VideoAboutPage;
