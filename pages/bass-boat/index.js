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

        <title>Bass Boat</title>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/tbcguides.fish/fishing-logo.jpg"
        />
        <meta name="theme-color" content="#FFFFFF"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <GeneralServiceComponent
        Title="Bass Boat"
        MainImageURL="https://s3.amazonaws.com/tbcguides.fish/main-bass-boat.jpeg"
        MainImageDescription="bass boat attached to truck on grass"
        Description='Our latest addition to the fleet is the
              <a
                href=
                  "https://www.skeeterboats.com/Skeeter-Boat.php?id=165#:~:text=The%20ZXR21%2C%20is%20the%20top,and%20efficient%2C%20lighter%20yet%20stronger"
                style="color:blue;text-decoration:underline;"
              >Skeeter ZXR 21</a>. This fishing platform is armed with a bow mounted trolling
              motor, two fish finders, and a modest 250 horses to get us fishing
              faster. We can fit up to four anglers on this boat. This craft is
              ideal for the day trip solo angler, couples up for the weekend,
              and small families for those lake side pickups. On the warmer days
              we can even take a swim, the ladder folds up and down in a snap.'
        itemData={itemData}
        itemPrelim="bass-boat-photos-"
        itemFormat="jpg"
      />
    </div>
  );
}

const itemData = [
  {
    number: "01",
    description:
      "Woman in white shirt next to man holding largemouth bass on blue boat",
  },
  {
    number: "02",
    description: "boy in blue shirt and pink shorts holding largemouth bass",
  },
  {
    number: "03",
    description: "Woman in white hat and black pants holding largemouth bass",
  },
  {
    number: "04",
    description:
      "Zoomed out photo of man in red shirt and woman in white jacket and blank pants fly fishing on blue boat",
  },
  {
    number: "06",
    description:
      "Man with no shoes, grey shorts, and white shirt holds largemouth bass on blue boat",
  },
  {
    number: "07",
    description:
      "Man in straw hat and black shirt kneels down holding largemouth bass on boat",
  },
  {
    number: "08",
    description: "Two girls in swimsuits hold largemouth bass on blue boat",
  },
  {
    number: "09",
    description:
      "younger man holds largemouth bass on boat while wearing sunglasses, grey shirt, and black shorts",
  },
  {
    number: 10,
    description: "Older woman in green shirt holds laremouth bass on blue boat",
  },
  {
    number: 11,
    description:
      "boy in purple life jacket holds smallmouth bass with two hands",
  },
  {
    number: 12,
    description:
      "Tall man wearing black bucket hat, blue shirt, and grey shorts holds smallmouth bass on blue boat",
  },
  {
    number: 13,
    description:
      "man wearing black jacket, glasses, and beige baseball cap holding up fish with gills out",
  },
  {
    number: 14,
    description: "boy in grey jacket holds largemouth bass on blue boat",
  },
  {
    number: 15,
    description:
      "Man in green sunglasses, grey shirt, and camo shorts holds largemouth bass on blue boat",
  },
  {
    number: 17,
    description:
      "Man in brown baseball cap, camo jacket, and grey pants holds largemouth bass on boat",
  },
  {
    number: 18,
    description: "close-up of australian shepherd sitting on boat",
  },
  {
    number: 19,
    description:
      "older man in blue shirt, beige crocks, bucket hat, and blue sunglasses holds up largemouth bass on boat",
  },
  {
    number: 20,
    description:
      "Girl in sweatshirt, black sweatpants, and white shoes holds largemouth bass on blue boat",
  },
  {
    number: 21,
    description:
      "Man in white shirt, grey shorts, and tevas holds largemouth bass on blue boat",
  },
  {
    number: 22,
    description:
      "Father in white shirt, grey shorts, and tevas holds northern pike with two twin boys each wearing navy t-shirts and black baseball caps on boat",
  },
  {
    number: 23,
    description:
      "Man in blue shirt standing on green cooler fly fishing on boat",
  },
  {
    number: 24,
    description:
      "Boy in blue baseball hat and white crocs holding smallmouth bass next to grandfather wearing grey shirt and khaki cargo shorts on blue boat",
  },
  {
    number: 25,
    description:
      "grandfather wearing a blue jacket and his two grandchildren fishing at front of blue boat",
  },
  {
    number: 26,
    description: "Girl sitting on end of blue boat while parked on land",
  },
  {
    number: 27,
    description:
      "blue boat sitting in city parking space while hitched to white truck",
  },
];
