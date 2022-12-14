import { Box, Typography, Stack, Rating, Grid } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

const Reviews = ({ name, date, description}) => {
    return (
        <Stack
          direction="row"
          ml={{ xs: 1, sm: 1, md: 0 }}
        >
          <Grid container direction="row">
            <Grid item container direction="column" lg={4} md={4} sm={3} xs={4}>
              <Typography variant="h3_about" mb={1}>
                {name}
              </Typography>
              <Typography variant="h5_about">{date}</Typography>
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
                    <StarRateIcon fontSize="5.5rem" color="secondary" />
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
                  variant="h6_about"
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
    );
}

export default Reviews
