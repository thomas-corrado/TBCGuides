
import * as React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledImageBox = styled(Box, {
  position: "relative",
  width: "100vw",
  height: "calc(70vh - 12vw)",
  overflow: "hidden",
});

const StyledCoverBox = styled(Box, {
  position: "relative",
  width: "100vw",
  height: "calc(70vh - 12vw)",
  overflow: "hidden",
  backgroundColor: "white",
  opacity: 0.8,
  zIndex: 3,
});


const ImageBackgroundOne = () => {
  return (
    <div>
      <StyledImageBox className="imageBox">
        <div style={{}}>
          <video
            sx={{
              objectFit: "cover",
              layout: "fill",
            }}
            autoPlay
            muted
            playsinline
            loop
          >
            <source
              src="https://luciana-website.vercel.app/assets/luciana.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <style global jsx>{`
          .imageBox {
            margin-top: -1rem;
          }

          @media (max-width: 700px) {
            .imageBox {
              margin-top: -0.7rem;
            }
          }

          @media (max-width: 450px) {
            .imageBox {
              margin-top: -0.3rem;
            }
          }

          @media (max-width: 375px) {
            .imageBox {
              margin-top: -0.1rem;
            }
          }
        `}</style>
      </StyledImageBox>
    </div>
  );
};

export default ImageBackgroundOne;


