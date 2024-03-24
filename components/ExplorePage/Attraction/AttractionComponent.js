import { Stack, Box, Typography, Grid } from "@mui/material";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AttractionComponent = ({ AttractionName, AttractionDescription }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
      mt={4}
      mb={6}
    >
      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sx={{ padding: 0, margin: 0 }}>
          <Grid
            container
            justifyContent="center"
            spacing={0}
            sx={{ padding: 0, margin: 0 }}
            rowSpacing={{ xs: 4, md: 0 }}
          >
            {sections.map((section) => (
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                key={section}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  paddingLeft: {
                    xs: 0,
                    md:
                      section.header == "Where to Drink:" ? "1.45rem" : "0rem",
                  },
                  paddingRight: {
                    xs: section.header == "Where to Drink:" ? "0rem" : ".55rem",
                    md: 0,
                  },
                  margin: 0,
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                  variant="h3_explore"
                >
                  {section.header}
                  <br></br>
                </Typography>
                {section.description.map((company) => (
                  <Typography variant="h6_explore" key={company[0]}>
                    <Link href={company[1]} className="explore-links">
                      {company[0]}
                      <br></br>
                    </Link>
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AttractionComponent;

const sections = [
  {
    header: "Where to Stay:",
    description: [
      ["Six South St. Hotel", "https://sixsouth.com/"],
      ["Lake Morey Resort", "https://www.lakemoreyresort.com/"],
      ["Hanover Inn", "https://www.hanoverinn.com/"],
      ["Seyon Lodge", "https://vtstateparks.com/seyon.html"],
      ["Loch Lyme Lodge", "https://www.lochlymelodge.com/"],
    ],
  },
  {
    header: "Where to Eat:",
    description: [
      ["Lou's", "https://lousrestaurant.com/"],
      ["Duende", "https://www.esduende.com/"],
      ["Simon Pearce", "https://www.simonpearce.com/our-restaurant"],
      ["Loch Lyme Lodge", "https://www.lochlymelodge.com/menu2024"],
      ["Broken Hearts Burger", "https://brokenheartsburger.com/"],
      ["Chapman’s General", "https://chapmansstore.com/"],
      ["Samurai Soul Food", "https://www.facebook.com/samuraisoulfood/"],
      ["Boloco", "https://boloco.com/"],
      ["Big Fatty's", "https://www.bigfattybbq.com/"],
      ["Three Tomatoes", "https://www.threetomatoestrattoria.com/"],
      ["Phnom Penh", "https://www.phnompenhsandwiches.com/"],
    ],
  },
  {
    header: "Where to Drink:",
    description: [
      ["Putnams Vine Yard", "https://www.putnamsvineyard.com/"],
      ["Crowler Pit", "https://www.bigfattybbq.com/crowler-bar/"],
      ["Lucky's Coffee Garage", "https://www.luckyscoffeegarage.com/"],
      ["King Arthur Baking", "https://www.kingarthurbaking.com/"],
      ["Chapman’s General", "https://chapmansstore.com/"],
      ["Half-Step Beer & Wine", "https://halfstep.beer/"],
    ],
  },
];
