import { useRouter } from "next/router";
import { Box, Stack, Button, Typography, Drawer } from "@mui/material";
import routerPushFunc from "../../../General/routerPushFunction";

const DrawerWrapper = ({ isOpen, pages, setOpen }) => {
    const router = useRouter();

    const toggleDrawer = () => (event) => {

      setOpen(false);
    };

    return (
      <Drawer
        id="menu-appbar"
        className="menu-drawer"
        {...{
          anchor: "right",
          open: isOpen,
          transitionDuration: 300,
        }}
        onClose={toggleDrawer(isOpen)}
        sx={{
          zIndex: 3,
        }}
      >
        <Box
          className="drawer-wrapper-box"
          sx={{
            paddingRight: "1rem",
          }}
        >
          <Stack direction="column" spacing={3}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => router.push(routerPushFunc(page))}
                sx={{ textAlign: "left", justifyContent: "left" }}
              >
                <Typography
                  textTransform="uppercase"
                  // variant="h4"
                  color={pages.includes("home")
                      ? "tbcblue"
                      : "secondary"
                  }
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                    fontSize: "calc(1rem + 2vw)",
                    fontFamily: "belda-normal",
                    textAlign: "left",
                    justifyContent: "left",
                  }}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    );
}

export default DrawerWrapper