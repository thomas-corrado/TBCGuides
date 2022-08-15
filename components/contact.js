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
           ? "252rem"
           : innerWidth > 1269
           ? "254rem"
           : innerWidth > 891
           ? "258rem"
           : innerWidth > 751
           ? "265rem"
           : innerWidth > 570
           ? "254rem"
           : innerWidth > 528
           ? "258rem"
           : innerWidth > 484
           ? "242rem"
           : innerWidth > 439
           ? "243rem"
           : innerWidth > 425
           ? "243rem"
           : innerWidth > 388
           ? "246rem"
           : innerWidth > 350
           ? "253rem"
           : innerWidth > 337
           ? "258rem"
           : innerWidth > 296
           ? "260rem"
           : "261rem",
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
              paddingLeft: innerWidth > 367 ? undefined : "1rem",
              paddingRight:
                innerWidth > 688 || innerWidth < 500 ? undefined : "2rem",
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
                    fontFamily: "Raleway",
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

              <Button
                variant="contained"
                sx={{
                  fontFamily: "Raleway",
                  backgroundColor: "black",
                  color: "white",
                  justifyContent: "center",
                  width: "100%",
                  display: "flex",
                }}
              >

                    <a href="tel:+8282465616">Call Now</a>

              </Button>
              <p
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  fontFamily: "Raleway",
                }}
              >
                (828)-246-5616
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
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    paddingBottom: "1rem",
                    justifyContent: "center",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  Address
                </p>
              </div>

              <Button
                variant="contained"
                onClick={() => router.push(`https://www.google.com/maps/dir//TBC+Guide+Services+-+Kayak+Fishing+Specialists+-Fl/@43.6910071,-72.3663049,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4cb4cbfe06977f9f:0xefb6419ffa43da64!2m2!1d-72.2962651!2d43.6910285`)}
                sx={{
                  fontFamily: "Raleway",
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
                  fontFamily: "Raleway",
                  lineHeight: "1.7rem",
                }}
              >
                4 Hunter Lane <br />
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
              paddingLeft: innerWidth > 369 ? undefined : "2rem",
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
                    fontFamily: "Raleway",
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
                  fontFamily: "Raleway",
                  justifyContent: innerWidth > 688 ? "start" : "center",
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
}

export default Contact