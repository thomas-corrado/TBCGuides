import { Box, Stack, Rating, Typography, Container} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const RatingWrapper = () => {
  return (
    <ThemeProvider theme={RatingTheme}>
      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "90vw", display: "flex" }}>
          <Stack direction="column">
            <Stack
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Rating
                value={5}
                readOnly
                sx={{
                  paddingRight: "2vw",
                  fontSize: { xs: "10vw", sm: "8vw", md: "6vw", lg: "5.5rem" },
                  "& .MuiRating-icon": {
                    width: {
                      xs: "9.5vw",
                      sm: "7.5vw",
                      md: "5.5vw",
                      lg: "5rem",
                    },
                  },
                }}
                icon={
                  <StarRateIcon fontSize="5.5rem" sx={{ color: "black" }} />
                }
              />
              <Typography variant="h1">5</Typography>
            </Stack>

            <Typography
              variant="h2"
              ml={{ xs: 1, sm: 2, md: 2, lg: 4 }}
              mt={{ xs: 2, sm: 2, md: 4 }}
            >
              Loved by <br></br> every client.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RatingWrapper;

let RatingTheme = createTheme();

RatingTheme = createTheme(RatingTheme, {
  typography: {
    h1: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(3.5vmin + 8.5vmax)",
      lineHeight: "3rem",
    },
    h2: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1.5vmin + 3.5vmax)",
      lineHeight: "calc(1.5vmin + 3.5vmax)",
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#808080",
    },
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          "	.MuiRating-icon": {
            padding: "-2px",
          },
        },
      },
    },
  },
});


