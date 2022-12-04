import { Box, Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ComeJoinUs = () => {
    const router = useRouter(); 

    return (
      <ThemeProvider theme={joinTheme}>
        <Box className="come-join-us-outer-box" mb={8}>
          <Stack
            direction="column"
            className="come-join-us-outer-stack"
            spacing={4}
          >
            <Typography className="ready-typography" variant="h2">
              Ready to start your fishing journey?
            </Typography>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => router.push(`/reservations`)}
            >
              <Typography variant="h4">Book a Reservation</Typography>
            </Button>
          </Stack>
        </Box>
      </ThemeProvider>
    );
}

export default ComeJoinUs

const joinTheme = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#808080",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableFocusRipple: true,
        variant: "outlined"
      },
      styleOverrides: {
        root: {
          color: "#808080",
          "&:hover": {
            backgroundColor: "#808080",
            color: "#FFFFFF",
          },
        },
      },
    },
  },
});
