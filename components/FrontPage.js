import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledImageBox = styled(Box, {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

// const StyledImage = styled(Image, {
//   opacity: 1,
//   position: "absolute",
// });

const FrontPage = () => {
  return (
    <div>
      <StyledImageBox>
        <div style={{
            width: "10px"
        }}>
          <h1
            style={{
              color: "rgb(114, 61, 70)",
              fontSize: "3rem",
              fontFamily: "Antonio",
              paddingLeft: "3rem",
            }}
          >
            Hanover Guides
          </h1>
        </div>
      </StyledImageBox>
    </div>
  );
};

export default FrontPage;
