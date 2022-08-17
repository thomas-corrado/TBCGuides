import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { useEffect, useState } from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";

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
      width: innerWidth > 722 ? "80vw" : innerWidth > 351 ? "78vw" : "81vw",
      paddingTop: "3rem",
    });

    const StyledDescriptionBox = styled("div", {
      paddingTop: "3rem",
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
          : innerWidth > 339
          ? "47rem"
          : "49rem",
      width: innerWidth > 768 ? "85vw" : "75vw",
      height: "auto",
      backgroundColor: "#F6F6F6",
      display: "flex",
      alignContent: "center",
    });

    const StyledDescriptionText = styled("p", {
      color: "black",
      fontSize: innerWidth > 440 ? "1.3rem" : "1.1rem",
      fontFamily: "Raleway",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      lineHeight: innerWidth > 722 ? "calc(1rem + (4rem - 1.5vw))" : "2.4rem",
    });

    const StyledDividerBoxOne = styled("div", {
      paddingTop: "3rem",
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
          : innerWidth > 337
          ? "47rem"
          : "49rem",
      left: innerWidth > 722 ? "5.5rem" : innerWidth > 526 ? "4rem" : "2.5rem",
      zIndex: 5,
    });

    const StyledMichaelImageBox = styled(Box, {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      top:
        innerWidth > 1268
          ? "58rem" : innerWidth > 883 ? "62rem" : innerWidth > 768
          ? "63rem" 
          : innerWidth > 722
          ? "67rem"
          : innerWidth > 619
          ? "66rem"
          : innerWidth > 500
          ? "67rem" : innerWidth > 492 ? "66rem" 
          : innerWidth > 440
          ? "66rem"
          : innerWidth > 339
          ? "65rem"
          : "67rem",
      width: "100vw",
      height: "40rem",
      overflow: "hidden",
    });

    const StyledMichaelImageBoxTwo = styled(Box, {
      width: "80vw",
      height: innerWidth > 527 ? "50rem" : "25rem",
      position: "absolute",
    });

    const dislayDesktop = () => {
        return (
          <StyledDesktopExperienceBox>
            <StyledFishingExperienceTitle>
              Touring Led by Mike Blatt
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
                  src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660602868/bio_xsminj.jpg"
                  alt="Harpoon"
                />
              </StyledMichaelImageBoxTwo>
            </StyledMichaelImageBox>
            <StyledDescriptionBox>
              <StyledDescriptionText>
                Mike Blatt is an extremely experienced fisherman with fully
                certified training in Wilderness First Response, as well as
                Swiftwater Rescue.
              </StyledDescriptionText>
            </StyledDescriptionBox>
          </StyledDesktopExperienceBox>
        );
    }

    return <div>{dislayDesktop()}</div>;
}

export default Experience