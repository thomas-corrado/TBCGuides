import Image from "next/image";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledWelcome = styled("h2", {
  color: "black",
  fontFamily: "livory",
  textAlign: "center",
  position: "absolute",
  zIndex: 3,
});

const BackgroundImage = () => {
  return (
    <Box
      sx={{
        opacity: 1,
      }}
    >
      <Image
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
        src="https://d14drtvwlopsgs.cloudfront.net/Homepage.jpeg"
        alt="Harpoon"
      />
    </Box>
  );
};

export default BackgroundImage;
