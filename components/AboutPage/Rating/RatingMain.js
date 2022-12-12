
import { Stack, Grid, Box } from "@mui/material";
import RatingWrapper from "./RatingWrapper";
import Reviews from "./Reviews";

const RatingMain = () => {
    return (
      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <Grid container sx={{ width: "90vw" }}>
          <Grid item container xs={12} sm={12} md={6} lg={6}>
            <RatingWrapper />
          </Grid>
          <Grid item container xs={12} sm={12} md={6} lg={6}>
            <Reviews
              name="Nate F."
              date="November 2022"
              description="I've been fishing with Mike multiple times and he simply knows the Upper Valley and our fish to a 'T.' He spends enough time on the water to know where a fish will be and what it will bite based on the week, temperature, wind direction, etc. - all kinds of factors. He is a great guide no matter the experience of the angler, as I've seen him teach kids brand new to fishing all the way up to experienced anglers like myself. If you're in the area, hire him to get out on a kayak or on the ice to have a great day, catch fish, and learn some new techniques.
"
            />
          </Grid>
        </Grid>
      </Box>
    );
}

export default RatingMain