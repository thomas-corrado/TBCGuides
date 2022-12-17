import { Box, Stack, Rating, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

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
                  <StarRateIcon color="secondary" fontSize="5.5rem"  />
                }
              />
              <Typography variant="h1_about">5</Typography>
            </Stack>

            <Typography
              variant="h2_about"
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


