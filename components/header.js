import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { Box } from "@mui/system";

const headersData = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Reservations",
    href: "/reservations",
  },
  {
    label: "Location",
    href: "/location",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
];

const Header = () => {
  const router = useRouter();

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1030
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          onClick={() => router.push(`${href}`)}
          disableTouchRipple
          sx={{
            zIndex: "3",
            marginRight: "2rem",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <h2
            style={{
              color: "black",
              fontFamily: "Antonio",
              fontSize: "1.5rem",
            }}
          >
            {label}
          </h2>
        </Button>
      );
    });
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, index }) => {
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
                color: "black",
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

  const [isOpen, setOpen] = useState(false);

  

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
          top: "1.5rem",
          position: "absolute",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "calc(100vw - 4rem)",
            zIndex: "4",
            top: "1rem",
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} color="#023047" />
        </div>

        <Drawer
          {...{
            anchor: "top",
            open: isOpen,
            onClose: handleDrawerClose,
          }}
          disableRipple
          sx={{
            zIndex: "3",
            "& .MuiPaper-root": {
              background: "white",
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
    );
  };

  const displayDesktop = () => {
    return (
     
        <div
          style={{
            float: "right",
            marginTop: "4.8rem",
            marginRight: "0",
            paddingRight: "1rem",
          }}
        >
          {getMenuButtons()}
        </div>
      
    );
  };

  return (
    <div>
      <div
        className="headerBackground"
        style={{
          width: "100vw",
          backgroundColor: "#F6F6F6",

          position: "absolute",
        }}
      >
        <style jsx>{`
          .headerBackground {
            height: 10.5rem;
          }
          @media (max-width: 600px) {
            h1 {
              font-size: 4rem;
              line-height: 4rem;
              width: 10px;
            }
          }

          @media (max-width: 450px) {
            .headerBackground {
              height: 8.5rem;
            }
          }
        `}</style>
        {mobileView ? displayMobile() : displayDesktop()}
      </div>
    </div>
  );
};

export default Header;
