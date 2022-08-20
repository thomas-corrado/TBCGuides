import * as React from "react";
import NavBar from "../../components/navBar";
import AboutVideo from "../../components/aboutVideo";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import LearnMore from "../../components/learnMore";
import Head from "next/head";

const StyledButtonBox = styled(Box, {
    width: "100vw", 
    display: "flex", 
    justifyContent: "center", 
    position: "relative", 
    fontFamily: "Raleway", 
})

export default function AboutPage() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
        <meta name="theme-color" content="#000000"></meta>
      </Head>
      <style global jsx>
        {`
          html {
            background-color: black;
          }
        `}
      </style>
      <NavBar />
      <AboutVideo />
      <LearnMore />
    </div>
  );
}
