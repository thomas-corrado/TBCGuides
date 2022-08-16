import * as React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Image from "next/image";
import Link from "next/link";

const About = () => {
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

  const StyledDesktopAboutBox = styled(Box, {
    width: "100vw",
    height: "auto",
    position: "absolute",
    top:
      innerWidth > 1306
        ? "208rem"
        : innerWidth > 1269
        ? "212rem"
        : innerWidth > 752
        ? "216rem"
        : innerWidth > 751
        ? "221rem"
        : innerWidth > 528
        ? "205rem"
        : innerWidth > 500
        ? "190rem"
        : innerWidth > 484
        ? "189rem"
        : innerWidth > 439
        ? "190rem"
        : innerWidth > 425
        ? "185rem"
        : innerWidth > 388
        ? "189rem"
        : innerWidth > 338
        ? "192rem"
        : innerWidth > 324 
        ? "198rem" 
        : innerWidth > 296
        ? "200rem" 
        : "202rem", 
    paddingBottom: "2rem"
  });

  const StyledCutOutOneBoxOne = styled(Box, {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    overflow: "hidden",
    position: "absolute",
  });

  const StyledCutOutOneBoxTwo = styled(Box, {
    width: "100vw",
    height: "100%",
    position: "absolute",
  });

  const StyledMoreBox = styled(Box, {
    width: "100vw",
    position: "absolute",
    height: "auto",
    backgroundColor: "#d8d8d8",
    top: "3rem", 
    zIndex: -1
  });

  const StyledHeadingBox = styled(Box, {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
    textAlign: "center",
    postition: "absolute",
    fontSize: innerWidth > 440 ? "2.5rem" : "2rem",
    fontFamily: "Raleway",
    opacity: 1,
    
    zIndex: 1
  });

  const StyledAboutBoxOne = styled(Box, {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
    postition: "absolute",
    zIndex: 1,
    marginTop: "2rem",
    fontFamily: "Raleway",
  });

  const StyledAboutBoxTwo = styled(Box, {
    display: "flex",
    width: "40rem",
    justifyContent: "center",
    postition: "absolute",
    zIndex: 1,
  });

  const StyledCutOutTwoBoxOne = styled(Box, {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    overflow: "hidden",
    position: "absolute",
  });

  const StyledCutOutTwoBoxTwo = styled(Box, {
    width: "100vw",
    height: "100%",
    position: "absolute",
  });

  return (
    <StyledDesktopAboutBox>
      <style global jsx>{`
        .cutBox {
          z-index: -1;
          height: 4rem;
        }

        .headingBox {
          margin-top: 8rem;
        }

        .boxTwo {
          width: 50rem;
          line-height: 2rem;
          padding-bottom: 7rem;
        }

        @media (max-width: 1290px) {
          .headingBox {
            margin-top: 7rem;
          }
        }

        @media (max-width: 1120px) {
          .headingBox {
            margin-top: 6rem;
          }
        }

        @media (max-width: 890px) {
          .boxTwo {
            width: 30rem;
          }
        }

        @media (max-width: 570px) {
          .boxTwo {
            width: 25rem;
          }
        }

        @media (max-width: 440px) {
          .boxTwo {
            width: 20rem;
          }
        }

        @media (max-width: 380px) {
          .boxTwo {
            width: 17rem;
          }
        }
      `}</style>
      <StyledCutOutOneBoxOne className="cutBox">
        <StyledCutOutOneBoxTwo className="cutBox">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
            src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660581635/cut-paper-top_wy23td.png"
            alt="Harpoon"
          />
        </StyledCutOutOneBoxTwo>
      </StyledCutOutOneBoxOne>

      <StyledMoreBox>
        <StyledHeadingBox className="headingBox">
          What You&#39;ll Do
        </StyledHeadingBox>
        <StyledAboutBoxOne>
          <StyledAboutBoxTwo className="boxTwo">
            <p
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We will be meeting at a
              boat launch on a local River, Pond, or Lake in or near Norwich,
              VT. We will first make sure you are outfitted with the proper
              equipment. Our fleet consists of single person kayaks as well as
              tandem, equipped with fish finders, fishing rods, bait, and
              tackle. We start with training on river safety, paddling
              instruction, and kayak fishing technique and etiquette. We will be
              targeting local River and Lake fish species, different fish bite
              at different times of the day, as well as during different weather
              and light conditions. Target fish include: Largemouth Bass,
              Smallmouth Bass, Rock Bass, Bluegill, Yellow Perch, and Walleye.
              For more details on fish species, click{" "}
              <a
                style={{
                  color: "#0000EE",
                  textDecoration: "underline",
                }}
                href="https://vtfishandwildlife.com/fish/fishing-opportunities/sportfish-of-vermont"
              >
                here
              </a>
              . Lunch is provided on the water (for full day trips). <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As the sun moves to the
              other side of the sky, we will spend the afternoon fishing the
              shade on the opposite bank we spent the morning on . There will be
              plenty of time to take photos and video, if you wish. And we will
              keep an eye out for the bald eagle flyover that we usually get in
              this part of the state. Other things to note: Mike is fully
              certified in Wilderness First Response, as well as Swiftwater
              Rescue. Most of the Waters have signs of civilization on all
              sides, we won&#39;t be too far from the safety of home most of the
              day.
            </p>
          </StyledAboutBoxTwo>
        </StyledAboutBoxOne>
        <StyledCutOutTwoBoxOne className="cutBox">
          <StyledCutOutTwoBoxTwo className="cutBox">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660585977/cut-paper-bottom_gaoxto.png"
              alt="Harpoon"
            />
          </StyledCutOutTwoBoxTwo>
        </StyledCutOutTwoBoxOne>
      </StyledMoreBox>
    </StyledDesktopAboutBox>
  );
};

export default About;