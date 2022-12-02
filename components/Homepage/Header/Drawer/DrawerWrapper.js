import { useRouter } from "next/router";
import { Box, Stack, Button, Typography, Drawer } from "@mui/material";

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
      >
        <Box
        className="drawer-wrapper-box"
        >
          <Stack direction="column" spacing={3}>
            {pages.map((page) => (
              <Button key={page} onClick={() => router.push(`/${page}`)}>
                <Typography
                  textTransform="uppercase"
                  textAlign="center"
                  variant="h4"
                  className="drawer-wrapper-buttons"
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