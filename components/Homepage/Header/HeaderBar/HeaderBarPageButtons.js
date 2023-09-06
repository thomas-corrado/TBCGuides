import * as React from "react";
import { Box, Button, Typography, Stack, Menu, MenuItem, Popper } from "@mui/material";
import { useRouter } from "next/router";
import routerPushFunc from "../../../General/routerPushFunction";

const HeaderBarPageButtons = ({ pages, position }) => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", lg: "flex" },
        justifyContent: position,
      }}
      mr={5}
    >
      <Stack direction="row" spacing={2}>
        {pages.map((page) =>
          page === "boats" ? (
            <Box onMouseLeave={handleClose}>
              <Button
                id="basic-button"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={() => router.push(routerPushFunc(page))}
                onMouseOver={handleClick}
                disableRipple
                key={page}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Typography
                  color={pages.includes("home") ? "primary" : "secondary"}
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    fontSize: "1.75rem",
                    fontFamily: "belda-normal",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {page}
                </Typography>
              </Button>
              <Popper
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onMouseLeave={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                sx={{
                  backgroundColor: "white",
                  padding: "5px",
                  borderRadius: "7px",
                  boxShadow: "1px 1px 1px 2px rgba(0, 0, 0, 0.2);",
                }}
              >
                <MenuItem
                  onClick={() => router.push(`/bass-boat`)}
                  disableRipple
                  sx={{
                    fontSize: "1.5rem",
                    fontFamily: "belda-normal",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Bass Boat
                </MenuItem>
                <MenuItem
                  onClick={() => router.push(`/pontoon`)}
                  disableRipple
                  sx={{
                    fontSize: "1.5rem",
                    fontFamily: "belda-normal",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Pontoon
                </MenuItem>
              </Popper>
            </Box>
          ) : (
            <Button
              disableRipple
              key={page}
              onClick={() => router.push(routerPushFunc(page))}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              <Typography
                color={pages.includes("home") ? "primary" : "secondary"}
                sx={{
                  display: { xs: "none", lg: "flex" },
                  fontSize: "1.75rem",
                  fontFamily: "belda-normal",
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                {page != "home" ? page : ""}
              </Typography>
            </Button>
          )
        )}
      </Stack>
    </Box>
  );
};

export default HeaderBarPageButtons;
