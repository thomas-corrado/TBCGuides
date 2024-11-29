import Image from "next/image";
import { Box } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";


const BackgroundImage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        opacity: 0.3,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video covers the container
          zIndex: -1, // Places the video behind other elements
        }}
      >
        <source
          src="https://s3.us-east-1.amazonaws.com/tbcguides.fish/tbc_guides+(1080p).mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* <Image
        // data-aos="fade-in"
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
        src="https://s3.amazonaws.com/tbcguides.fish/Spring-Homepage.jpg"
        alt="frozen-over-lake"
        loading="eager"
      /> */}
    </Box>
  );
};

export default BackgroundImage;
