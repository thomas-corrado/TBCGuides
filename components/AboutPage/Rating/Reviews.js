import { Box, Typography, Stack, Rating, Grid } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Reviews = ({ name, date, description}) => {
    return (
      <ThemeProvider theme={ReviewTheme}>
        <Stack
          direction="row"
          ml={{ xs: 1, sm: 1, md: 0 }}
        >
          <Grid container direction="row">
            <Grid item container direction="column" lg={4} md={4} sm={3} xs={4}>
              <Typography variant="h3" mb={1}>
                {name}
              </Typography>
              <Typography variant="h5">{date}</Typography>
            </Grid>
            <Grid item container direction="column" lg={8} md={8} sm={9} xs={8}>
              <Box ml={{ xs: 1, sm: 0 }}>
                <Rating
                  value={5}
                  readOnly
                  sx={{
                    fontSize: "calc(1rem + 1.5vw)",
                    "& .MuiRating-icon": {
                      width: "calc(.8rem + 1.5vw)",
                    },
                  }}
                  icon={
                    <StarRateIcon fontSize="5.5rem" sx={{ color: "black" }} />
                  }
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "flex-end", sm: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ width: "95%"}}
                  mt={1}
                  ml={{ xs: 0, sm: 0, md: 1}}
                >
                  {description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </ThemeProvider>
    );
}

export default Reviews

const ReviewTheme = createTheme({
  typography: {
    h3: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(2.5vmin + 3.5vmax - 1.5vw)",
      lineHeight: "calc(2.5vmin + 3.5vmax - 1.5vw)",
    },
    h5: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1vmin + 1.5vmax - .3vw)",
      lineHeight: "calc(1vmin + 1.5vmax- .3vw)",
    },
    h6: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(1.5vmin + 1.2vmax - .5vw)",
      lineHeight: "calc(1.5vmin + 1.6vmax)",
    },
  },
});