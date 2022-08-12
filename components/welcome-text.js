import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { useEffect, useState } from "react";

const StyledWelcomeTextBox = styled(Box, {
  position: "absolute",
  zIndex: 4,
  width: "100vw",
  justifyContent: "center",
  display: "flex",
  height: "calc(70vh - 12vw)",
});

const StyledWelcome = styled("h1", {
  color: "#FB8500",
  fontFamily: "Lobster",
  textAlign: "center",
  top: "40%",
  transform: "translateY(-50%)",

  position: "absolute",
});

const WelcomeText = () => {

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
        <StyledWelcomeTextBox>
          <style global jsx>{`
            .welcome {
              font-size: 4rem;
              margin-right: 5rem
            }

          @media (max-width: 1150px) {
              .welcome {
                margin-right: 1rem
              }
            }

            @media (max-width: 710px) {
              .welcome {
                font-size: 3.5rem;
                margin-right: 2rem
              }
            }

            @media (max-width: 630px) {
              .welcome {
               font-size: 3rem;
            }

            @media (max-width: 550px) {
              .welcome {
                font-size: 2.5rem; 
                width: 79vw; 
                line-height: 3rem; 
                margin-right: 1.8rem
              }
            }

            @media (max-width: 450px) {
            .welcome {
              margin-top: 45px; 
               
            }

            @media (max-width: 410px) {
            .welcome {
               margin-right: 5rem
            }
          }
          `}</style>
          <StyledWelcome className="welcome">
            Welcome to the <br />
            Upper Valley&rsquo;s Premiere {mobileView ? undefined : <br />}
            Kayak, Ice, and Fly
            <br />
            Fishing Guide Service
          </StyledWelcome>
        </StyledWelcomeTextBox>
      </div>
    );
}

export default WelcomeText