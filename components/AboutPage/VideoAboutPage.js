import { Box, Stack } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const VideoAboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="carousel-outer"
        style={{
          width: "100vw",
          display: "flex",
          height: "70vh",
          marginTop: "1rem",
          overflow: "scroll",
          marginBottom: "2rem",
        }}
      >
        <div
          className="carousel-inner"
          style={{ display: "flex", flexDirection: "row", paddingLeft: "1vw" }}
        >
          {videos.map((video) => (
            <>
              <video
                key={video.name}
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "1rem",
                }}
                preload="metadata"
                playsinline
                poster={video.videoPoster}
              >
                <source
                  src={video.videoLink}
                  type="video/mp4"
                  alt="Video about TBC Guides"
                />
              </video>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoAboutPage;

const videos = [
  {
    name: "video one",
    videoLink: "https://s3.amazonaws.com/tbcguides.fish/tbc-video-1.MP4",
    videoPoster:
      "https://s3.amazonaws.com/tbcguides.fish/tbc-video-1-poster.jpeg",
  },
  {
    name: "video two",
    videoLink: "https://s3.amazonaws.com/tbcguides.fish/tbc-video-2.MP4",
    videoPoster:
      "https://s3.amazonaws.com/tbcguides.fish/tbc-video-2-poster.jpeg",
  },
  {
    name: "video three",
    videoLink: "https://s3.amazonaws.com/tbcguides.fish/tbc-video-3.MP4",
    videoPoster:
      "https://s3.amazonaws.com/tbcguides.fish/tbc-video-3-poster.jpeg",
  },
  {
    name: "video four",
    videoLink: "https://s3.amazonaws.com/tbcguides.fish/tbc-video-4.MP4",
    videoPoster:
      "https://s3.amazonaws.com/tbcguides.fish/tbc-video-4-poster.jpeg",
  },
  {
    name: "video five",
    videoLink: "https://s3.amazonaws.com/tbcguides.fish/tbc-video-5.MP4",
    videoPoster:
      "https://s3.amazonaws.com/tbcguides.fish/tbc-video-5-poster.jpeg",
  },
  {
    name: "video six",
    videoLink: "https://s3.amazonaws.com/tbcguides.fish/tbc-video-6.MP4",
    videoPoster:
      "https://s3.amazonaws.com/tbcguides.fish/tbc-video-6-poster.jpeg",
  },
];
