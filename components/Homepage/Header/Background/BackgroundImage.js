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
      <Image
        data-aos="fade-in"
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
        src="https://s3.amazonaws.com/tbcguides.fish/Homepage_2.jpeg"
        alt="frozen-over-lake"
        loading="eager"
      />
    </Box>
  );
};

export default BackgroundImage;
