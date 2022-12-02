import Image from "next/image";
import { Box } from "@mui/material";

const BottomImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        height: "4rem",
      }}
      mt={-1}
    >
      <Image
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
        src="https://d14drtvwlopsgs.cloudfront.net/cut-paper-bottom.png"
        alt="Bottom-Cutout-Image"
      />
    </Box>
  );
};

export default BottomImage;
