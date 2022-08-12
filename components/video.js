
import * as React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledImageBox = styled(Box, {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

const Video = () => {
  return (
    <div>
      {/* <StyledImageBox>
        <style jsx>{`

          .video-overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: white;
            opacity: 0.8;
            z-index: 2;
          }
    
        `}</style>
        <div className="video-overlay" />
        <Image
          priority
          layout="fill"
          objectFit="cover"
          quality={100}
          src={require("../public/DJI_0596_MOV_AdobeExpress.gif")}
          alt="Background Image"
        />
      </StyledImageBox> */}
    </div>
  );
};

export default Video;


