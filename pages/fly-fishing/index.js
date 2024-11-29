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

        <title>Fly Fishing</title>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/tbcguides.fish/fishing-logo.jpg"
        />
        <meta name="theme-color" content="#FFFFFF"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <GeneralServiceComponent
        Title="Fly Fishing"
        MainImageURL="https://s3.amazonaws.com/tbcguides.fish/Homepage_2.jpeg"
        MainImageDescription="snow mobile on snow-covered lake with sun setting behind tree line"
        Description=" Ice fishing is one of the best ways to catch the big fish you
              missed during the open water months. We are drilling 6-8 holes per
              person through the ice, setting up traps with live bait, and
              running to those flags when they go up. While we are waiting for
              those fish to bite, we are learning how to jig and how to use
              sonar to find more fish."
        itemData=""
        itemPrelim=""
        itemFormat=""
      />
    </div>
  );
}
