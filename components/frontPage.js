import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Video from "./image-background-one";
import Header from "./header";
import WelcomeText from "./welcome-text";

const StyledImageBox = styled(Box, {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  zIndex: "3",
  marginBottom: "0"
});

const FrontPage = () => {
  return (
    <div>
      <StyledImageBox>
        <style global jsx>{`
          h1 {
            color: #023047;
            font-size: 4rem;
            font-family: Antonio;
            line-height: 4rem;
            padding-left: 4.5rem;
            margin-top: 0.8rem;
          }

          @media (max-width: 1150px) {
            h1 {
              padding-left: 2rem;
            }
          }

          @media (max-width: 700px) {
            h1 {
              font-size: 3.5rem;
              line-height: 4rem;
              padding-left: 2rem;
            }
          }

          @media (max-width: 450px) {
            h1 {
              font-size: 3rem;
              line-height: 3rem;
              padding-left: 2rem;
              top: -0.2rem;
            }
          }

          @media (max-width: 375px) {
            h1 {
              font-size: 2.5rem;
              line-height: 3rem;
              padding-left: 1.5rem;
              top: -0.2rem;
            }
          }
        `}</style>
        <div
          style={{
            width: "1rem",
          }}
        >
          <h1>Hanover Guides</h1>
        </div>

        <Video />
      </StyledImageBox>
      <Header />
    </div>
  );
};

export default FrontPage;
