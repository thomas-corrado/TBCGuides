import { useRouter } from "next/router";
import { Box, Stack, Button, Typography, Drawer } from "@mui/material";

const DrawerWrapper = ({ isOpen, pages }) => {
    const router = useRouter();

    return (
      <Drawer
        id="menu-appbar"
        {...{
          anchor: "top",
          open: isOpen,
          transitionDuration: 700,
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
        <Box
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Stack direction="column" spacing={3}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => router.push(`/${page}`)}
                disableRipple
              >
                <Typography
                  textTransform="uppercase"
                  textAlign="center"
                  variant="h2"
                  sx={{
                    fontFamily: "Antonio",
                    fontWeight: 700,
                    color: "#596d90",
                    textDecoration: "none",
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