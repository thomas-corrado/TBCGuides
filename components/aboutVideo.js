import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledOuterBox = styled(Box, {
  width: "100vw",
  height: "calc(100vh - 4rem)",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  position: "absolute",
  top: "4rem",
});

const StyledInnerBox = styled(Box, {
  position: "relative",
  height: "100%",
  width: "95vw",
  display: "table",
  overflow: "hidden",
});

const AboutVideo = () => {
    return (
      <StyledOuterBox>
        <StyledInnerBox>
          <div
            className="videoBox"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              overflow: "hidden",
            }}
          >
            <video
              controls
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "calc(100vh - 4rem)",
                display: "block",
                overflow: "hidden",
                padding: 0, 
                margin: 0
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