
import { Grid, Box } from "@mui/material";
import RatingWrapper from "./RatingWrapper";
import Reviews from "./Reviews";
import LoadCollapse from "./LoadCollapse";
import GreyDivider from "./GreyDivider";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RatingMain = () => {
    const [show, setShow]=useState(false); 

        useEffect(() => {
          AOS.init();
        }, []);

    return (
      <Box
        sx={{ width: "100vw", display: "flex", justifyContent: "center" }}
        mt={{ xs: 0, sm: 2, md: 6, lg: 8 }}
        data-aos="fade-up"
      >
        <Grid container sx={{ width: "90vw" }}>
          <Grid item container xs={12} sm={12} md={6} lg={6}>
            <RatingWrapper />
          </Grid>
          <Grid item container xs={12} sm={12} md={6} lg={6}>
            <Reviews
              name="Nate F."
              date="November 2022"
              description="I've been fishing with Mike multiple times and he simply knows the Upper Valley and our fish to a 'T.' He spends enough time on the water to know where a fish will be and what it will bite based on the week, temperature, wind direction, etc. - all kinds of factors. He is a great guide no matter the experience of the angler, as I've seen him teach kids brand new to fishing all the way up to experienced anglers like myself. If you're in the area, hire him to get out on a kayak or on the ice to have a great day, catch fish, and learn some new techniques."
            />
            {!show && (
              <LoadCollapse title="Load More" show={show} setShow={setShow} />
            )}
            {show && (
              <>
                <GreyDivider />
                {reviewData.map((person) => (
                  <>
                    <Reviews
                      key={person.name}
                      name={person.name}
                      date={person.date}
                      description={person.description}
                    />
                    {person.grey && <GreyDivider />}
                  </>
                ))}
                <LoadCollapse title="Collapse" show={show} setShow={setShow} />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    );
}

export default RatingMain

const reviewData = [
  {
    name: "Mitch R.",
    date: "November 2021",
    description:
      "Simply put, Mike exceeded all expectations. My girlfriend and I went for a date night and had a blast! (and obviously caught fish!) All equipment was in exceptional condition, everything was communicated effectively and in a way that makes you feel as if you'd been fishing buddies for years. Can't recommend enough and will definitely be bringing a few friend's on another trip at some point!",
    grey: true,
  },
  {
    name: "Kelley D.",
    date: "October 2022",
    description:
      "Mike worked really hard to find the best fishing spots for us. The equipment was awesome, kayaks were very nice and he’s great. Definitely recommend and look forward to going out again.",
    grey: true,
  },
  {
    name: "Howard Z.",
    date: "July 2021",
    description:
      "My wife and I had a great time fishing with Mike. He was extremely knowledgeable and helpful throughout the entire trip. We caught smallmouth bass, perch, and bluegill and had a great time fishing the entire lake. Definitely would recommend a trip with Mike.",
    grey: true,
  },
  {
    name: "Caleb D.",
    date: "March 2021",
    description:
      "Mike is a terrific fishing guide. I have gone out on my own a bit, but without much luck. Then when Mike and I went out in the Fall, it seemed the fish were simply attracted to us we were getting so many bites. It was an extremely successful trip near the end of the season. Plus, Mike made it a fun time – he clearly knew the perfect type of lures for the area (and could explain why he was recommending that specific lure), had a deep understanding of how different river and weather conditions affect the fish, and made great non-fishing conversation. He came well supplied with all the equipment that we needed and even gave me tips on where to go in the future! Highly recommend a trip with Mike.",
    grey: false,
  },
];