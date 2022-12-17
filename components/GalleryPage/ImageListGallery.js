import { Box,  ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ImageListGallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
              data-aos="fade-up"
            >
              <ImageListItem>
                <Image
                  src={`https://s3.amazonaws.com/tbcguides.fish/winter-${item.number}.jpg`}
                  alt={`https://s3.amazonaws.com/tbcguides.fish/winter-${item.number}.jpg`}
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
    number: 5,
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
];
