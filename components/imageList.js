import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { Box } from "@mui/system";

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

const StyledBox = styled(Box, {
    width: "100vw", 
    display: "flex", 
    justifyContent: "center", 
    top: "3rem", 
    position: "relative"
})

const ImageListWrapper = () => {
    
    return (
      <StyledBox>
        <ImageList variant="masonry" cols={1} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.number}>
              <img
                src={`https://d14drtvwlopsgs.cloudfront.net/fish-holding-${item.number}.jpg`}
                srcSet={`https://d14drtvwlopsgs.cloudfront.net/fish-holding-${item.number}.jpg`}
                alt={item.number}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </StyledBox>
    );

  
};

export default ImageListWrapper;
