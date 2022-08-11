import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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

const StyledHamburger = styled(Hamburger, {
  color: "rgb(18, 49, 43)",
  position: "absolute",
  left: "calc(100vw - 4rem)",
});


const Header = () => {
  const router = useRouter();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    buttonOpen: false
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
            color: "rgb(71, 45, 48)",
            marginRight: "2rem",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <h2
            style={{
              color: "rgb(71, 45, 48)",
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
                fontSize: window.innerWidth > 360 ? "1.5rem" : "1.5rem",
                lineHeight: window.innerWidth > 300 ? "3rem" : "2rem",
                color: "rgb(71, 45, 48)",
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
    }
      
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
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} color="#472D30" />
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
            top: "10",
            "& .MuiPaper-root": {
              background: "white",
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
              top: "25vh",
              position: "relative",
              fontFamily: "Antonio",
            }}
          >
            {getDrawerChoices()}
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
          paddingRight: "1rem"
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
