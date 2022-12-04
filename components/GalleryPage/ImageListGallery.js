// import Masonry from "@mui/lab/Masonry";
import { Box, Stack, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

const ImageListGallery = () => {
  return (
    <Box
      mt={4}
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "90vw",
          justifyContent: "center",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <ImageList
          cols={2}
          sx={{
            overflow: "hidden",
            width: "90vw",
          }}
        >
          {itemData.map((item) => (
            <Box
              key={item.number}
              sx={{
                width: { xs: "90vw", sm: "100%", md: "100%", lg: "100%" },
              }}
            >
              <ImageListItem>
                  <Image
                    src={`https://d14drtvwlopsgs.cloudfront.net/fish-holding-${item.number}.jpg`}
                    srcSet={`https://d14drtvwlopsgs.cloudfront.net/fish-holding-${item.number}.jpg`}
                    alt={item.number}
                    className="complicated-image"
                    layout="fill"
                  />
              </ImageListItem>
            </Box>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default ImageListGallery;

const itemData = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 6,
  },
  {
    number: 7,
  },
  {
    number: 8,
  },
  {
    number: 9,
  },
  {
    number: 10,
  },
  {
    number: 11,
  },
  {
    number: 12,
  },
  {
    number: 13,
  },
  {
    number: 14,
  },
  {
    number: 15,
  },
  {
    number: 16,
  },
  {
    number: 17,
  },
  {
    number: 18,
  },
  {
    number: 19,
  },
  {
    number: 20,
  },
  {
    number: 21,
  },
  {
    number: 22,
  },
  {
    number: 23,
  },
  {
    number: 24,
  },
  {
    number: 25,
  },
  {
    number: 26,
  },
  {
    number: 27,
  },
  {
    number: 28,
  },
  {
    number: 29,
  },
  {
    number: 30,
  },
  {
    number: 31,
  },
  {
    number: 32,
  },
  {
    number: 33,
  },
  {
    number: 34,
  },
  {
    number: 35,
  },
  {
    number: 36,
  },
  {
    number: 37,
  },
  {
    number: 38,
  },
  {
    number: 39,
  },
  {
    number: 40,
  },
  {
    number: 41,
  },
  {
    number: 42,
  },
  {
    number: 43,
  },
  {
    number: 44,
  },
];
