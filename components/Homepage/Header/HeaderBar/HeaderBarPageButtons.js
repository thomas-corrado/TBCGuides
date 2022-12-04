import {
  Box,
  Button,
  Typography,
  Stack
} from "@mui/material";
import { useRouter } from "next/router";
import routerPushFunc from "../../../General/routerPushFunction";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const menuAndDrawer = createTheme({
  typography: {
    fontFamily: ["Antonio"].join(","),
  },

});

const HeaderBarPageButtons = ({ pages, position }) => {
    const router = useRouter();

    return (
        
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: position,
          }}
        >
          <Stack direction="row" spacing={2}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => router.push(routerPushFunc(page))}
              >
                <Typography
                  variant="h4"
                  className="tbc-logo"
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                  
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Box>
    </ThemeProvider>
    );
};

export default HeaderBarPageButtons;
