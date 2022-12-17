import { Box, Button, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import routerPushFunc from "../../../General/routerPushFunction";

const HeaderBarPageButtons = ({ pages, position }) => {
    const router = useRouter();

    return (
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: position,
        }}
        mr={5}
      >
        <Stack direction="row" spacing={2}>
          {pages.map((page) => (
            <Button
              disableRipple
              key={page}
              onClick={() => router.push(routerPushFunc(page))}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography
                color={pages.includes('home') ? 'secondary' : 'primary'}
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontSize: "3rem",
                  fontFamily: "Antonio",
                }}
              >
                {page}
              </Typography>
            </Button>
          ))}
        </Stack>
      </Box>
    );
};

export default HeaderBarPageButtons;
