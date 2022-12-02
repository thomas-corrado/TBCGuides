import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const pages = ["about", "reservations", "gallery"];

const AppBarWrapper = () => {
    const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <Box mt={3}>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ width: "1rem" }} ml={3}>
              <Typography
                variant="h2"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Antonio",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                TBC Guides
              </Typography>
            </Box>

            {/* icon  */}
            <Typography
              variant="h2"
              component="a"
              href=""
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Antonio",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                left: "2rem",
              }}
              ml={-3}
            >
              TBC Guides
            </Typography>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* actual buttons */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                fontFamily: "Antonio",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => router.push(`/${page}`)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Antonio",
                  }}
                  disableRipple
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "Antonio",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default AppBarWrapper;
