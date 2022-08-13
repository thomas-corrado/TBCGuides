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

    console.log(innerWidth)

    const StyledDesktopExperienceBox = styled("div", {
      width: "100vw",
      height: "auto",
      position: "absolute",
    });

    const StyledFishingExperienceTitle = styled("h3", {
      color: "black",
      position: "relative",
      fontSize: innerWidth > 440 ? "2.5rem" : "2rem",
      top: innerWidth > 500 ? "41rem" : "39rem",
      zIndex: 3,
      left: innerWidth > 722 ? "5.5rem" : innerWidth > 526 ? "4rem" : "2.5rem",
      fontFamily: "Raleway",
      width: innerWidth > 722 ? "80vw" : innerWidth > 351 ? "78vw" : "80vw",
    });

    const StyledDescriptionBox = styled("div", {
      color: "black",
      left: innerWidth > 722 ? "5.5rem" : innerWidth > 526 ? "4rem" : "2.5rem",
      position: "absolute",
      top:
        innerWidth > 722
          ? "48rem"
          : innerWidth > 500
          ? "51rem"
          : innerWidth > 440
          ? "48rem"
          : "47rem",
      width: innerWidth > 768 ? "85vw" : "75vw",
      height: "auto",
      backgroundColor: "#F6F6F6",
      display: "flex",
      alignContent: "center",
    });

    const StyledDescriptionText = styled("p", {
      color: "black",
      fontSize: innerWidth > 440 ? "1.3rem" : "1.1rem",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      lineHeight: innerWidth > 722 ? "calc(1rem + (4rem - 1.5vw))" : "2.4rem",
    });

    const StyledDividerBoxOne = styled("div", {
      position: "absolute",
      display: "flex",
      top:
        innerWidth > 722
          ? "48rem"
          : innerWidth > 702
          ? "51rem"
          : innerWidth > 500
          ? "51rem"
          : innerWidth > 440
          ? "48.5rem"
          : "47rem",
      left: innerWidth > 722 ? "6rem" : innerWidth > 526 ? "4rem" : "2.5rem",
      zIndex: 5,
    });

    const StyledMichaelImageBox = styled(Box, {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      top: (innerWidth > 1268 ? "55rem" : innerWidth > 752 ? "59.5rem" : innerWidth > 722 ? "64rem" : innerWidth > 619 ? "62rem" : innerWidth > 500 ? "63rem" : innerWidth > 440 ? "61rem" : innerWidth > 339 ? "59rem" : "62rem"),
      width: "100vw",
      height: "40rem",
      overflow: "hidden",
    });

    const StyledMichaelImageBoxTwo = styled(Box, {
      width: "80vw",
      height: "50rem",
      position: "absolute",
    });

    const dislayDesktop = () => {
        return (
          <StyledDesktopExperienceBox>
            <StyledFishingExperienceTitle>
              The Finest Fishing Experience
            </StyledFishingExperienceTitle>
            <StyledDividerBoxOne>
              <Divider
                sx={{
                  width: innerWidth > 526 ? "25rem" : "15rem",
                }}
              />
            </StyledDividerBoxOne>
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


    return <div>{dislayDesktop()}</div>;
}

export default Experience