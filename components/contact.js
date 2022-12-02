import * as React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();

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

  const StyledDesktopTestimonialBox = styled(Box, {
    width: "100vw",
    height: "auto",
    position: "absolute",
    paddingTop: "8rem",
    top:
      innerWidth > 1306
        ? "265rem"
        : innerWidth > 1269
        ? "270rem"
        : innerWidth > 891
        ? "271rem"
        : innerWidth > 751
        ? "292rem"
        : innerWidth > 570
        ? "278rem"
        : innerWidth > 558
        ? "278rem"
        : innerWidth >= 527
        ? "287rem"
        : innerWidth > 484
        ? "271rem"
        : innerWidth > 439
        ? "276rem"
        : innerWidth > 425
        ? "282rem"
        : innerWidth > 388
        ? "290rem"
        : innerWidth > 379
        ? "297rem"
        : innerWidth > 337
        ? "305rem"
        : innerWidth > 296
        ? "307rem"
        : "317rem",
    backgroundColor: "white",
  });

  return (
    <StyledDesktopTestimonialBox>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            width: "15rem",
            display: "flex",
            justifyContent: "center",
            paddingLeft: innerWidth > 367 ? "1rem" : "1rem",
            paddingRight:
              innerWidth > 688 || innerWidth < 500 ? undefined : "2rem",
            paddingBottom: "1rem",
          }}
        >
          <div style={{ justifyContent: "center" }}>
            <div>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "2rem",
                  fontFamily: "livory",
                  fontStyle: "normal",
                  paddingBottom: "1rem",
                  justifyContent: "center",
                  width: "100%",
                  display: "flex",
                }}
              >
                Contact
              </p>
            </div>
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontFamily: "livory",
                  backgroundColor: "black",
                  color: "white",
                  justifyContent: "center",

                  display: "flex",
                }}
              >
                <a href="tel:+18282465616">Call Now</a>
              </Button>
            </Box>

            <p
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                fontFamily: "livory",
                textAlign: "center",
              }}
            >
              (828)-246-5616
              <br></br>
              <br></br>
              tbcguides@gmail.com
            </p>
          </div>
        </Grid>
        <Grid
          sx={{
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            paddingLeft: innerWidth > 367 ? undefined : "1rem",
            paddingRight:
              innerWidth > 688 || innerWidth < 368 ? undefined : "2rem",
            paddingBottom: "1rem",
          }}
        >
          <div>
            <div>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "2rem",
                  fontFamily: "livory",
                  fontStyle: "normal",
                  paddingBottom: "1rem",
                  justifyContent: "center",
                  width: "100%",
                  display: "flex",
                }}
              >
                Location
              </p>
            </div>

            <Button
              variant="contained"
              onClick={() =>
                router.push(
                  `https://www.google.com/maps/place/Hanover,+NH/@43.714773,-72.1908299,12z/data=!3m1!4b1!4m5!3m4!1s0x4cb4b72270accce5:0x7f1adceb13ecf04f!8m2!3d43.7022451!4d-72.2895526`
                )
              }
              sx={{
                fontFamily: "livory",
                backgroundColor: "black",
                color: "white",
                justifyContent: "center",
                width: "100%",
                display: "flex",
              }}
            >
              Get Directions
            </Button>
            <p
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                fontFamily: "livory",
                lineHeight: "1.7rem",
              }}
            >
              Hanover, NH <br />
              03755 USA
            </p>
          </div>
        </Grid>
        <Grid
          sx={{
            width: "20rem",
            display: "flex",
            justifyContent: "center",
            paddingLeft: innerWidth > 500 ? undefined : "2rem",
            paddingBottom: "1rem",
          }}
        >
          <div>
            <div>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "2rem",
                  fontFamily: "livory",
                  fontStyle: "normal",
                  justifyContent: "center",
                  width: "100%",
                  display: "flex",
                }}
              >
                Business Hours
              </p>
            </div>
            <p
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                fontFamily: "livory",
                justifyContent: innerWidth > 720 ? "start" : "center",
                lineHeight: "1.7rem",
              }}
            >
              Mon: 7:00 AM – 7:00 PM <br />
              Tues: 7:00 AM – 7:00 PM <br />
              Wed: 7:00 AM – 7:00 PM <br />
              Thurs: 7:00 AM – 7:00 PM <br />
              Fri: 7:00 AM – 7:00 PM <br />
              Sat: 7:00 AM – 7:00 PM <br />
              Sun: 7:00 AM – 7:00 PM <br />
            </p>
          </div>
        </Grid>
      </Grid>
    </StyledDesktopTestimonialBox>
  );
};

export default Contact;
