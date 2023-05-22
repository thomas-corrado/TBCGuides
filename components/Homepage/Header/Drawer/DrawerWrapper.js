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
          anchor: "right",
          open: isOpen,
          transitionDuration: 300,
        }}
        sx={{
          zIndex: 3,
        }}
      >
        <Box
          className="drawer-wrapper-box"
          sx={{ paddingRight: '2rem'}}
        >
          <Stack direction="column" spacing={3}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => router.push(routerPushFunc(page))}
              >
                <Typography
                  textTransform="uppercase"
                  
                  // variant="h4"
                  color={pages.includes("home") ? "secondary" : "tbcblue"}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                    fontSize: "calc(1rem + 2vw)", 
                    fontFamily: "belda-normal",
                    textAlign: 'left', 
                    justifyContent: 'left'
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