import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import Hamburger from "hamburger-react";

const navData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Reservations",
    href: "/reservations",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
];

const StyledBlackBar = styled("div", {
  width: "100%",
  height: "4rem",
  backgroundColor: "black",
  position: "fixed",
  justifyContent: "center",
  zIndex: 5
});

const NavBar = () => {
     const router = useRouter();

     const [state, setState] = useState({
       mobileView: false,
     });

     const [isOpen, setOpen] = useState(false);

     const { mobileView } = state;

     useEffect(() => {
       const setResponsiveness = () => {
         return window.innerWidth < 585
           ? setState((prevState) => ({ ...prevState, mobileView: true }))
           : setState((prevState) => ({ ...prevState, mobileView: false }));
       };

       setResponsiveness();
       window.addEventListener("resize", () => setResponsiveness());

       return () => {
         window.removeEventListener("resize", () => setResponsiveness());
       };
     }, []);

      const getDrawerChoices = () => {
        return navData.map(({ label, href, index }) => {
          return (
            <div key={index}>
              <Link
                {...{
                  color: "inherit",
                  style: { textDecoration: "none" },
                }}
                href={href}
              >
                <MenuItem
                  disableRipple
                  sx={{
                    fontFamily: "Antonio",
                    fontSize: "2rem",
                    lineHeight: "3rem",
                    color: "white",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      textAlign: "center",
                      fontFamily: "Raleway",
                    }}
                  >
                    {label}
                  </Box>
                </MenuItem>
              </Link>
            </div>
          );
        });
      };


     const displayDesktop = () => {
        return (
            <Grid
            container
            spacing={4}
            sx={{
                justifyContent: "center",
            }}
            >
            {navData.map((title, index) => {
                return (
                <Grid item key={index}>
                    <Button
                    onClick={() => router.push(`${title.href}`)}
                    sx={{
                        color: "white",
                        fontFamily: "Raleway",
                    }}
                    >
                    <p>{title.label}</p>
                    </Button>
                </Grid>
                );
            })}
            </Grid>
        )
     }
     
     const displayMobile = () => {

        const handleDrawerClose = () => {
          setState((prevState) => ({
            ...prevState,
            drawerOpen: false,
            buttonOpen: false,
          }));
        };

        return (
            <div
        style={{
          top: ".5rem",
          position: "absolute",
          
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "calc(100vw - 4rem)",
            zIndex: 99
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>

        <Drawer
          {...{
            anchor: "top",
            open: isOpen,
            onClose: handleDrawerClose,
            transitionDuration: 700, 
          }}
          disableRipple
          sx={{
            zIndex: "3",
            "& .MuiPaper-root": {
              background: "black",
              boxShadow: "none",
              width: "100vw",
              height: "100%",
            },
            "& .MuiBackdrop-root": {
              background: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100vw",
              position: "relative",
              fontFamily: "Antonio",
            }}
          >
            <Box
              sx={{
                width: "auto",
                position: "relative",
                top: "15%",
              }}
            >
              {getDrawerChoices()}
            </Box>
          </div>
        </Drawer>
      </div>
        )
     }

     return (
       <div>
         <StyledBlackBar>
           {mobileView ? displayMobile() : displayDesktop()}
         </StyledBlackBar>
       </div>
     );

}

export default NavBar