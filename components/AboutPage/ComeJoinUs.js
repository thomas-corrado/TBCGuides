import { Box, Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const ComeJoinUs = () => {
    const router = useRouter(); 

    useEffect(() => {
      AOS.init();
    }, []);

    return (
      
        <Box>
          <Box className="come-join-us-outer-box">
            <Stack
              direction="column"
              className="come-join-us-outer-stack"
              spacing={{ xs: 4, sm: 4, md: 6}}
              mb={12}
              data-aos="fade-up"
            >
              <Typography
                mt={12}
                color="primary"
                className="ready-typography"
                variant="h2_about"
              >
                Ready to start your fishing journey?
              </Typography>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => router.push(`/reservations`)}
              >
                <Typography variant="h3_about">Make a Reservation</Typography>
              </Button>
            </Stack>
          </Box>
        </Box>
     
    );
}

export default ComeJoinUs

// const joinTheme = createTheme({
//   typography: {
//     fontFamily: ["belda-normal"].join(","),
//   },
//   palette: {
//     primary: {
//       main: "#FFFFFF",
//     },
//     secondary: {
//       main: "#808080",
//     },
//   },
//   components: {
//     MuiButton: {
//       defaultProps: {
//         // The props to change the default for.
//         disableRipple: true, // No more ripple, on the whole application 💣!
//         disableFocusRipple: true,
//         variant: "outlined",
//       },
//       styleOverrides: {
//         root: {
//           color: "#FFFFFF",
//           "&:hover": {
//             backgroundColor: "#FFFFFF",
//             color: "#8590A4",
//           },
//         },
//       },
//     },
//   },
// });
