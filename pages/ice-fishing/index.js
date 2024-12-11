import * as React from "react";
import Head from "next/head";
import GeneralServiceComponent from "../../components/ServicesPage/GeneralServiceComponent";

export default function BassBoatPage() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />

        <title>Ice Fishing</title>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/tbcguides.fish/fishing-logo.jpg"
        />
        <meta name="theme-color" content="#FFFFFF"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <GeneralServiceComponent
        Title="Ice Fishing"
        MainImageURL="https://s3.amazonaws.com/tbcguides.fish/Homepage_2.jpeg"
        MainImageDescription="snow mobile on snow-covered lake with sun setting behind tree line"
        Description=" Ice fishing is one of the best ways to catch the big fish you
              missed during the open water months. We are drilling 6-8 holes per
              person through the ice, setting up traps with live bait, and
              running to those flags when they go up. While we are waiting for
              those fish to bite, we are learning how to jig and how to use
              sonar to find more fish."
        itemData={itemData}
        itemPrelim="ice-fishing-"
        itemFormat="jpg"
      />
    </div>
  );
}

const itemData = [
  {
    number: 1,
    description:
      "Boy #1 with a scarf holding a fish on a frozen lake surrounded by other boys while smiling",
  },
  {
    number: 2,
    description:
      "Boy #2 with a scarf and an LL Bean hat holding a fish on a frozen lake surrounded by other boys  while smiling",
  },
  {
    number: 3,
    description:
      "Boy #3 with a scarf and an LL Bean hat holding a fish on a frozen lake surrounded by other boys  while smiling",
  },
  {
    number: 4,
    description:
      "Man with orange hat holding a fish on a frozen lake while smiling",
  },

  {
    number: 5,
    description:
      "Middle-aged man in a beige jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 6,
    description:
      "Middle-aged woman in an orange jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 7,
    description:
      "Older woman in a purple jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 8,
    description:
      "Older man in a green jacket and blue balaclava holding a fish on a frozen lake while smiling",
  },
  {
    number: 9,
    description:
      "Middle-aged man in a red jacket and grey hat holding a fish on a frozen lake while smiling",
  },

  {
    number: 10,
    description:
      "Middle-aged woman in a purple jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 11,
    description:
      "Young girl in a warm jacket and pink sweatshirt holding a fish on a frozen lake while smiling",
  },

  {
    number: 12,
    description:
      "Woman in a purple solomon jacket, white scarf, grey beanie, and sunglasses holding one fish while smirking",
  },

  {
    number: 13,
    description:
      "Woman wearing black jacket, white vest, white hat, and black gloves holding a fish on a frozen lake",
  },
  {
    number: 14,
    description: "Two young girls in large coats holding a fish while smiling",
  },
  {
    number: 15,
    description:
      "Boy kneeling on frozen lake while holding fish vertically with two other boys to his right",
  },
  {
    number: 16,
    description: "Man kneeling on frozen lake while holding fish horizontally",
  },
  {
    number: 17,
    description:
      "Boy in visor sunglasses holding fish vertically while standing on frozen lake",
  },
  {
    number: 18,
    description:
      "Girl in green sunglasses, red jacket, and grey hat holding fish horizontally while standing on frozen lake",
  },
  {
    number: 19,
    description:
      "Woman in maroon puffer jacket and black bib holding fishing rod and fish while standing on lake",
  },
  {
    number: 20,
    description:
      "Woman in green jacket and black north face hat smiling while holding fish vertically on frozen lake",
  },
  {
    number: 21,
    description:
      "Teenage girl in blue ski jacket and light blue snow pants holding fishing rod and fish while standing on lake",
  },
  {
    number: 22,
    description:
      "Man in camo pants, black sweatshirt, and black hat holding a fish verticallly while standing on lake",
  },
  {
    number: 23,
    description: "Man in red snow pants, grey flannel, and black hat holding fish horizontally while kneeling on lake",
  },
  {
    number: 24,
    description: "Girl in snowsuit holding fish vertically while standing on frozen lake",
  },
  {
    number: 25,
    description: "Boy in red jacket and grey snow pants smiling while holding fish vertically on frozen lake",
  },
  {
    number: 26,
    description: "Girl in pink jacket, blue hat, and yellow snow pants holding fish vertically while standing on frozen lake",
  },
  {
    number: 27,
    description: "Older man in green jacket and black pants smiling while holding fish vertically on frozen lake",
  },
  {
    number: 28,
    description: "Boy in black puffer jacket and blue snow pants holding fish vertically on frozen lake",
  },
  {
    number: 29,
    description: "Boy in blue jacket and navy snow pants kneeling on frozen lake while holding fish vertically",
  },
  {
    number: 30,
    description: "Boy in black jacket and snow pants holding fish vertically on frozen lake",
  },
  {
    number: 31,
    description: "Woman holding small black dog in arms and fish vertically in other hand on frozen lake",
  },
  {
    number: 32,
    description: "Boy in grey sweatshirt and black snow pants kneeling while holding fish vertically on frozen lake",
  },
  {
    number: 33,
    description: "Boy in visor sunglasses, navy ski jacket, and grey snow pants holding fish horizontally on frozen lake",
  },
  {
    number: 35,
    description: "Man in green hat, black snow pants, and black ski jacket smiling and kneeling while holding fish horiztonally on frozen lake",
  },
  {
    number: 36,
    description: "Man in fur hat kneeling on frozen lake while pointing and holding a fish vertically",
  },
];