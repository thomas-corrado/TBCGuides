import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Video from "./video";
import Header from "./header";
import { useEffect, useState } from "react";

const StyledImageBox = styled(Box, {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  zIndex: "3",
  marginBottom: "0"
});

const StyledWelcome = styled("h2", {
  color: "white",
  fontFamily: "Lobster",
  textAlign: "center",
  
  position: "absolute",
  zIndex: 3
});

const FrontPage = () => {

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  const [innerWidth, setInnerWidth] = React.useState(0);

  useEffect(() => {
    const setResponsiveness = () => {
      setInnerWidth(window.innerWidth);
      return window.innerWidth < 423
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

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

          .video-container {
            margin-top: -1rem;
          }

          .welcome-container {
            display: flex;
            width: 100%;
            height: 30rem;
            justify-content: center;
            position: absolute;
            z-index: 3;
            top: 10.5rem;
          }

          .welcome {
            font-size: 4rem;
            top: 40%;
            transform: translateY(-50%);
          }

          @media (max-width: 700px) {
            .welcome {
              font-size: 3.5rem;
            }
          }

          @media (max-width: 620px) {
            .welcome {
              font-size: 3rem;
            }
          }

          @media (max-width: 519px) {
            .welcome {
              font-size: 2.5rem;
              line-height: 3rem;
            }
          }

          @media (max-width: 450px) {
            h1 {
              font-size: 3rem;
              line-height: 3rem;
              padding-left: 2rem;
              top: -0.2rem;
            }
            .video-container {
              top: 8.5rem;
              margin-top: -0.3rem;
            }

            .welcome-container {
              top: 8.5rem;
            }
          }

          @media (max-width: 400px) {
            h1 {
              font-size: 2.5rem;
              line-height: 3rem;
              padding-left: 1.5rem;
              top: -0.2rem;
            }
            .welcome {
              font-size: 2.5rem;
              line-height: 3rem;
            }
            .welcome-container {
              margin-top: -0.3rem;
              width: 90vw; 
              padding-left: 11vw;
              justify-content: center;
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
        <div className="video-container">
          <Video />
        </div>
      </StyledImageBox>
      <Box className="welcome-container">
        <StyledWelcome className="welcome">
          Welcome to the <br />
          Upper Valley&rsquo;s Premiere {mobileView ? undefined : <br />}
          Kayak, Ice, and Fly
          <br />
          Fishing Guide Service
        </StyledWelcome>
      </Box>

      <Header />
    </div>
  );
};

export default FrontPage;
