import Image from "next/image";
import { Box } from "@mui/material";

const TopImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        height: "4rem",
      }}
      mt={-8}
    >
      <Image
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
        src="https://d14drtvwlopsgs.cloudfront.net/cut-paper-top-final.png"
        alt="Top-Cutout-Image"
      />
    </Box>
  );
};

export default TopImage;
