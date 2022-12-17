import { Box, Stack, Rating, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const RatingWrapper = () => {


  return (
    
      <Box
        sx={{ width: "100vw", display: "flex", justifyContent: "left" }}
        
      >
        <Box>
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
              ml={{ xs: 1, sm: 1, md: 2, lg: 4 }}
              mt={4}
              mb={{ xs: 5, sm: 5, md: 0 }}
            >
              Loved by <br></br> every guest.
            </Typography>
          </Stack>
        </Box>
      </Box>
    
  );
};

export default RatingWrapper;

// const RatingTheme = createTheme({
//   typography: {
//     h1: {
//       fontFamily: ["belda-normal"].join(","),
//       fontSize: "calc(3.5rem + 5vw)",
//       lineHeight: "3rem",
//     },
//     h2: {
//       fontFamily: ["belda-normal"].join(","),
//       fontSize: "calc(1.5rem + 2.5vw)",
//       lineHeight: "calc(1.5rem + 2.5vw)",
//     },
//   },
//   palette: {
//     primary: {
//       main: "#000000",
//     },
//     secondary: {
//       main: "#808080",
//     },
//   },
//   components: {
//     MuiIcon: {
//       styleOverrides: {
//         root: {
//           "	.MuiRating-icon": {
//             padding: "-2px",
//           },
//         },
//       },
//     },
//   },
// });


