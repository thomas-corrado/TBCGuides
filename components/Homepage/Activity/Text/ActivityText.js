import { Box, Stack, Typography, Link } from "@mui/material";

const ActivityText = () => {
  return (
    <Box sx={{ backgroundColor: "#d8d8d8", width: "100vw", display: "flex", justifyContent: "center"}}>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          width: "100vw",
          alignItems: "center"
        }}
        mt={4}
        mb={7}
      >
        <Typography
          style={{
            fontFamily: "livory",
            fontSize: "2rem",
          }}
        >
          What We&#39;ll Do
        </Typography>
        <Box
          sx={{
            backgroundColor: "#d8d8d8",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            paddingLeft: "1.5vw"
          }}
        >
          <Typography
            style={{
              display: "inline",
              fontFamily: "livory",
              fontSize: "1.2rem",
              lineHeight: "2rem",
              width: "calc(60vw + 4rem)",
              flexWrap: "wrap",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We will be meeting at a
            boat launch on a local River, Pond, or Lake in or near Norwich, VT.
            We will first make sure you are outfitted with the proper equipment.
            Our fleet consists of single person kayaks as well as tandem,
            equipped with fish finders, fishing rods, bait, and tackle. We start
            with training on river safety, paddling instruction, and kayak
            fishing technique and etiquette. We will be targeting local River
            and Lake fish species, different fish bite at different times of the
            day, as well as during different weather and light conditions.
            Target fish include: Largemouth Bass, Smallmouth Bass, Bluegill,
            Yellow Perch, and Walleye. For more details on fish species, click{" "}
            <Link href="https://vtfishandwildlife.com/fish/fishing-opportunities/sportfish-of-vermont">
              here
            </Link>
            . Lunch is provided on the water (for full day trips). <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As the sun moves to the
            other side of the sky, we will spend the afternoon fishing the shade
            on the opposite bank we spent the morning on . There will be plenty
            of time to take photos and video, if you wish. And we will keep an
            eye out for the bald eagle flyover that we usually get in this part
            of the state. Most of the waters have signs of civilization on all
            sides, we won&#39;t be too far from the safety of home most of the
            day.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ActivityText;
