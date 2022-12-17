import { useRouter } from "next/router";
import { Box, Stack, Button, Typography, Drawer } from "@mui/material";
import routerPushFunc from "../../../General/routerPushFunction";

const DrawerWrapper = ({ isOpen, pages }) => {
    const router = useRouter();

    return (
      <Drawer
        id="menu-appbar"
        className="menu-drawer"
        {...{
          anchor: "top",
          open: isOpen,
          transitionDuration: 700,
        }}
        sx={{
          zIndex: 3,
        }}
      >
        <Box className="drawer-wrapper-box">
          <Stack direction="column" spacing={3}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => router.push(routerPushFunc(page))}
              >
                <Typography
                  textTransform="uppercase"
                  textAlign="center"
                  variant="h4_antonio"
                  className="drawer-wrapper-buttons"
                  color={pages.includes("home") ? "secondary" : "tbcblue"}
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