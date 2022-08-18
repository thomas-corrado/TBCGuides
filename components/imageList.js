import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { Box } from "@mui/system";

const itemData = [
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-10.jpg",
    title: "one",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-11.jpg",
    title: "two",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-12.jpg",
    title: "thre",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-8.jpg",
    title: "four",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-9.jpg",
    title: "five",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-13.jpg",
    title: "six",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-7.jpg",
    title: "seven",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-6.jpg",
    title: "eight",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-1.jpg",
    title: "nine",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-14.jpg",
    title: "ten",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-2.jpg",
    title: "eleven",
  },
  {
    img: "https://d14drtvwlopsgs.cloudfront.net/fish-holding-4.jpg",
    title: "tweleve",
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
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </StyledBox>
    );

  
};

export default ImageListWrapper;
