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
        itemPrelim="fish-holding-"
        itemFormat="jpg"
      />
    </div>
  );
}

const itemData = [

  {
    number: 22,
    description:
      "Boy #1 with a scarf holding a fish on a frozen lake surrounded by other boys while smiling",
  },
  {
    number: 23,
    description:
      "Boy #2 with a scarf and an LL Bean hat holding a fish on a frozen lake surrounded by other boys  while smiling",
  },
  {
    number: 24,
    description:
      "Boy #3 with a scarf and an LL Bean hat holding a fish on a frozen lake surrounded by other boys  while smiling",
  },
  {
    number: 25,
    description:
      "Man with orange hat holding a fish on a frozen lake while smiling",
  },

  {
    number: 29,
    description:
      "Middle-aged man in a beige jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 30,
    description:
      "Middle-aged woman in an orange jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 31,
    description:
      "Older woman in a purple jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 32,
    description:
      "Older man in a green jacket and blue balaclava holding a fish on a frozen lake while smiling",
  },
  {
    number: 33,
    description:
      "Middle-aged man in a red jacket and grey hat holding a fish on a frozen lake while smiling",
  },
 
  {
    number: 28,
    description:
      "Middle-aged woman in a purple jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 35,
    description:
      "Young girl in a warm jacket and pink sweatshirt holding a fish on a frozen lake while smiling",
  },

  {
    number: 59,
    description:
      "Woman in a purple solomon jacket, white scarf, grey beanie, and sunglasses holding one fish while smirking",
  },

  {
    number: 56,
    description:
      "Woman wearing black jacket, white vest, white hat, and black gloves holding a fish on a frozen lake",
  },
  {
    number: 26,
    description: "Two young girls in large coats holding a fish while smiling",
  },

];