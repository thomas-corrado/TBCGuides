import { Box, Button, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import routerPushFunc from "../../../General/routerPushFunction";

const HeaderBarPageButtons = ({ pages, position }) => {
    const router = useRouter();

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
          {pages.map((page) => (
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
                color={
                  pages.includes("about") &&
                  pages.includes("reservations") &&
                  pages.includes("pontoon") &&
                  pages.includes("explore") &&
                  pages.includes("gallery")
                    ? "primary"
                    : "secondary"
                }
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
                {page}
              </Typography>
            </Button>
          ))}
        </Stack>
      </Box>
    );
};

export default HeaderBarPageButtons;
