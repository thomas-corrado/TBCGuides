import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledOuterBox = styled(Box, {
    width: "100vw", 
    height: "100vh", 
    display: "flex", 
    justifyContent: "center", 
})

const StyledInnerBox = styled(Box, {
  position: "absolute",
  top: "4rem",
  height: "calc(100vh - 4rem)", 
  width: '95vw'
});

const AboutVideo = () => {
    return (
      <StyledOuterBox>
        <StyledInnerBox>
          <div
            style={{
              width: "100%",
              height: "auto",
              position: "relative",
            }}
          >
            <video
              controls
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "calc(100vh - 4rem)",
                display: "block",
              }}
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dsc1j5xny/video/upload/v1660687489/tbc_guide_services__michael_blatt__-_v3_720p_lyrudn.mp4#t=0.5"
                type="video/mp4"
              />
            </video>
          </div>
        </StyledInnerBox>
      </StyledOuterBox>
    );
}

export default AboutVideo