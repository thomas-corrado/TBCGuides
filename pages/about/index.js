import * as React from "react";
import Head from "next/head";
import AboutPageComponent from "../../components/AboutPage/AboutPageComponent";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
        <title>About</title>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/tbcguides.fish/fishing-logo.jpg"
        />
        <meta name="theme-color" content="#FFFFFF"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <AboutPageComponent />
    </div>
  );
}


