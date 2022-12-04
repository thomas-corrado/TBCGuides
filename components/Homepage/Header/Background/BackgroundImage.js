import Image from "next/image";
import { Box } from "@mui/system";

const BackgroundImage = () => {
  return (
    <Box
      sx={{
        opacity: .3,
      }}
    >
      <Image
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
        src="https://d14drtvwlopsgs.cloudfront.net/Homepage.jpeg"
        alt="frozen-over-lake"
        loading="eager"
      />
    </Box>
  );
};

export default BackgroundImage;
