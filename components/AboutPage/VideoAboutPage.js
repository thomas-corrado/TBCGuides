import { Box, Stack } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const VideoAboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Stack className="video-outside-box" mt={6} mb={8} data-aos="fade-up">
      <Box className="video-inside-box">
        <video
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          preload="metadata"
          playsinline
          poster="https://s3.amazonaws.com/tbcguides.fish/poster.jpg"
        >
          <source
            src="https://s3.amazonaws.com/tbcguides.fish/about-video.mp4"
            type="video/mp4"
            alt="Video about TBC Guides"
          />
        </video>
      </Box>
    </Stack>
  );
};

export default VideoAboutPage;
