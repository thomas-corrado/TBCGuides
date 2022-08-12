
import { Translate } from "@mui/icons-material";
import * as React from "react";

const Video = () => {
  return (
    <div className="video-container">
      <style jsx>{`
        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .video-overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: white;
          opacity: 0.6;
          z-index: 2
        }

        .video-container video {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }
      `}</style>
      <div className="video-overlay" />
      <video
        src={require("../public/LargeBackground.mp4")}
        autoPlay="autoplay"
        loop="loop"
        muted
      ></video>
    </div>
  );
};

export default Video;


