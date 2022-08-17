import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { Box } from "@mui/system";

const itemData = [
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-10_abhx6o.jpg",
    title: "one",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-11_b0arj3.jpg",
    title: "two",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-12_fcgjdd.jpg",
    title: "thre",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-8_fycc0t.jpg",
    title: "four",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-9_hy2btb.jpg",
    title: "five",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-13_hawysi.jpg",
    title: "six",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450377/fish-holding-7_zgxdch.jpg",
    title: "seven",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450377/fish-holding-6_rmdkrj.jpg",
    title: "eight",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450377/fish-holding-one_qapjpo.jpg",
    title: "nine",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450376/fish-holding-14_ie19jk.jpg",
    title: "ten",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450376/fish-holding-2_sdrvsm.jpg",
    title: "eleven",
  },
  {
    img: "https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450376/fish-holding-4_nlhi1w.jpg",
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
        <ImageList variant="masonry" cols={2} gap={5}>
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
