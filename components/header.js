import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { Box } from "@mui/system";

const headersData = [
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
    drawerOpen: false,
    buttonOpen: false,
  });

  const { mobileView, drawerOpen, buttonOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1150
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
              color: "#9D0208",
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
                fontSize: window.innerWidth > 360 ? "3rem" : "1.5rem",
                lineHeight: window.innerWidth > 300 ? "6rem" : "2rem",
                color: "#9D0208",
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
          <Hamburger toggled={isOpen} toggle={setOpen} color="#9D0208" />
        </div>

        <Drawer
          {...{
            anchor: "right",
            open: isOpen,
            onClose: handleDrawerClose,
          }}
          disableRipple
          sx={{
            zIndex: "3",
            "& .MuiPaper-root": {
              background: "#FAA307",
              boxShadow: "none",
              width: "100vw",
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
              position: "absolute",
              fontFamily: "Antonio",
            }}
          >
            <Box
              sx={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
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
          marginTop: "4.4rem",
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
      <style jsx>{`
        @media (max-width: 600px) {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
            width: 10px;
          }
        }
      `}</style>
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  );
};

export default Header;
