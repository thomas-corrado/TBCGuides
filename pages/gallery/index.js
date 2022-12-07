import * as React from "react";
import Head from "next/head";
import GalleryPageComponent from "../../components/GalleryPage/GalleryPageComponent";

export default function GalleryPage() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
        <meta name="theme-color" content="#000000"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <GalleryPageComponent/>
    </div>
  );
}
