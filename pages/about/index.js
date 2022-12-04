import * as React from "react";
import NavBar from "../../components/navBar";
import NavigationBarNonHome from "../../components/General/NavigationBarNonHome";
import VideoAboutPage from "../../components/AboutPage/VideoAboutPage";
import AboutVideo from "../../components/aboutVideo";
import { Box, Stack } from "@mui/material";
import LearnMore from "../../components/learnMore";
import Head from "next/head";
import AboutPageComponent from "../../components/AboutPage/AboutPageComponent";
import ContactInfo from "../../components/Homepage/Contact/ContactInfo";

export default function AboutPage() {
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
      <AboutPageComponent />
    </div>
  );
}


