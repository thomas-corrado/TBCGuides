import * as React from "react";
import NavBar from "../../components/navBar";
import AboutVideo from "../../components/aboutVideo";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";
import LearnMore from "../../components/learnMore";

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
      <NavBar />
      <AboutVideo />
      <LearnMore/>
    </div>
  );
}
