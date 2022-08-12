import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { useEffect, useState } from "react";
import PhishingIcon from "@mui/icons-material/Phishing";
import Image from "next/image";
import Divider from "@mui/material/Divider";

// Harpoon Icon: 
{/* <a href="https://www.flaticon.com/free-icons/harpoon" title="harpoon icons">
  Harpoon icons created by Freepik - Flaticon
</a>; */}

const StyledDesktopExperienceBox = styled("div", {
   width: "100vw", 
   height: "auto", 
   position: "absolute", 
   
})

const StyledFishingExperienceText = styled("h3", {
  color: "black",
  position: "relative",
  fontSize: "2.5rem",
  top: "41rem",
  zIndex: 3,
  left: "5.5rem",
  fontFamily: "Raleway",
});

const StyledHarpoonImageBox = styled("div", {
  position: "absolute",
  display: "flex",
  top: "48rem",
  left: "6rem",
  zIndex: 5
});

const StyledDescriptionBox = styled("div", {
  color: "black",
  left: "5.5rem",
  position: "absolute",
  top: "48rem",
  fontSize: "1.3rem",
  width: "90vw",
  height: "auto",
  backgroundColor: "#F6F6F6",
  display: "flex",
  alignContent: "center",
  paddingRight: "2rem",
});

const StyledDescriptionText = styled("p", {
  color: "black",
  fontSize: "1.3rem",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  lineHeight: "calc(1rem + (4rem - 1.5vw))",
  
});

const StyledMichaelImageBoxTwo = styled(Box, {
  width: "80vw",
  height: "50rem",
  position: "absolute",
});

const Experience = () => {

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

    const StyledMichaelImageBox = styled(Box, {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      top: (innerWidth > 1268 ? "55rem" : "59.5rem"),

      width: "100vw",
      height: "40rem",
      overflow: "hidden",
    });

    const dislayDesktop = () => {
        return (
          <StyledDesktopExperienceBox>
            <StyledFishingExperienceText>
              The Finest Fishing Experience
            </StyledFishingExperienceText>
            <StyledHarpoonImageBox>
              <Divider
                sx={{
                  width: "25rem",
                }}
              />
            </StyledHarpoonImageBox>
            <StyledMichaelImageBox>
              <StyledMichaelImageBoxTwo>
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  src={require("../public/Michael.jpg")}
                  alt="Harpoon"
                
                />
              </StyledMichaelImageBoxTwo>
            </StyledMichaelImageBox>
            <StyledDescriptionBox>
              <StyledDescriptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </StyledDescriptionText>
            </StyledDescriptionBox>
          </StyledDesktopExperienceBox>
        );
    }

    const dislayMobile = () => {
        return (
            <div>

            </div>
        )
    };


    return <div>{mobileView ? dislayMobile() : dislayDesktop()}</div>;
}

export default Experience