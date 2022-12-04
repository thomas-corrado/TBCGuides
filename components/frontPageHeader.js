import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Header from "./header";
import { useEffect, useState } from "react";

const StyledImageBox = styled(Box, {
  position: "relative",
  width: "100vw",
  height: "auto",
  overflow: "hidden",
  zIndex: "1",
  top: "1rem",
});

const StyledLogo = styled(Box, {
  width: "1rem",
  height: "auto",
  position: "relative",
});

const FrontPageHeader = () => {

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
      <Header />
      <StyledImageBox>
        <StyledLogo>
          <h1
          className="tbc-guides"
            style={{fontFamily: "Antonio"}}
          >
            TBC Guides
          </h1>
        </StyledLogo>
      </StyledImageBox>
    </div>
  );
};

export default FrontPageHeader;


/**
 * <style global jsx>{`
          // html {
          //   background-color: white
          // }

          // body {
          //   background-color: white
          // }
          //   h1 {
          //     color: black;
          //     font-size: 4rem;
          //     font-family: Antonio;
          //     line-height: 4rem;
          //     padding-left: 4.5rem;
          //     margin-top: 0.8rem;
          //   }

          //   .video-container {
          //     margin-top: -1rem;
          //     width: 100vw;
          //     height: 30rem;
          //     overflow: hidden;
          //   }

          //   .video-cover {
          //     position: absolute;
          //     width: 100vw;
          //     height: 32rem;
          //     background-color: rgb(247, 247, 247);
          //     z-index: 3;
          //     opacity: 0.9;
          //     overflow: hidden;
          //     background-color: white;
          //   }

          //   .welcome-container {
          //     display: flex;
          //     width: 100%;
          //     height: 32rem;
          //     justify-content: center;
          //     position: absolute;
          //     z-index: 3;
          //     top: 10.5rem;
          //     padding-right: 1vw;
          //   }

          //   .image-container {
          //     display: flex;
          //     width: 100%;
          //     height: 32rem;
          //     justify-content: center;
          //     position: absolute;
          //     z-index: 2;
          //     top: 9.5rem;
          //     background-color: white;
          //   }

          //   .welcome {
          //     font-size: 4rem;
          //     top: 37%;
          //     transform: translateY(-50%);
          //     z-index: 4;
          //   }

            // @media (max-width: 830px) {
            //   h1 {
            //     padding-left: 1.5rem;
            // }

            // @media (max-width: 700px) {
            //   .welcome {
            //     font-size: 3.5rem;
            //   }
            // }

            // @media (max-width: 620px) {
            //   .welcome {
            //     font-size: 3rem;
            //   }
            // }

            // @media (max-width: 519px) {
            //   .welcome {
            //     font-size: 2.5rem;
            //     line-height: 3rem;
            //   }
            // }

            // @media (max-width: 450px) {
            //   h1 {
            //     font-size: 3rem;
            //     line-height: 3rem;
            //     top: -0.2rem;
            //   }
            //   .video-container {
            //     top: 8.5rem;
            //     margin-top: -0.3rem;
            //   }

            //   .welcome-container {
            //     top: 8.5rem;
            //     width: 90vw;
            //     padding-left: 10vw;
            //   }
            //   .image-container {
            //     top: 8.5rem;
            //   }
            //   .welcome {
            //     font-size: 3rem;
            //     line-height: 3.5rem;
            //     top: 42%;
            //   }
            // }

            // @media (max-width: 400px) {
            //   h1 {
            //     font-size: 2.5rem;
            //     line-height: 3rem;
            //     top: -0.2rem;
            //   }
            //   .welcome {
            //     font-size: 2.5rem;
            //     line-height: 3rem;
            //     top: 42%;
            //   }
            //   .welcome-container {
            //     margin-top: -0.3rem;
            //     width: 90vw;
            //     padding-left: 11vw;
            //     justify-content: center;
            //   }
            //   .image-container {
            //     margin-top: -0.3rem;
            //   }
            // }
        `}</style>
 */