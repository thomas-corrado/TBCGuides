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

const StyledImage = styled(Image, {
  opacity: 1,
  position: "absolute",
});

const FrontPage = () => {
  return (
    <div>
      <StyledImageBox>
        <style global jsx>{`
          h1 {
            color: rgb(71, 45, 48);
            font-size: 4rem;
            z-index: 1;
            font-family: Antonio;
            line-height: 4rem;
            
          }

          @media (max-width: 630px) {
            h1 {
              font-size: 4rem;
              line-height: 4rem;
              width: 10px;
            }
          }

          @media (max-width: 350px) {
            h1 {
              font-size: 3rem;
              line-height: 3rem;
              width: 10px;
              left: 1.5rem;
              top: -0.2rem;
            }
          }
        `}</style>
        <div
          style={{
            width: "1rem",
            paddingLeft: "4.5rem"
          }}
        >
          <h1>Hanover Guides</h1>
        </div>
      </StyledImageBox>
    </div>
  );
};

export default FrontPage;
