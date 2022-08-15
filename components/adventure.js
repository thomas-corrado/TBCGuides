import * as React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const Adventure = () => {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  const [innerWidth, setInnerWidth] = React.useState(0);

  useEffect(() => {
    const setResponsiveness = () => {
      setInnerWidth(window.innerWidth);
      return window.innerWidth < 423
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const StyledDesktopAdventureBox = styled(Box, {
    width: "100vw",
    height: "auto",
    position: "absolute",
    top:
    innerWidth > 1269 ? "102rem" :
      innerWidth > 752
        ? "106rem"
        : innerWidth > 751
        ? "110rem"
        : innerWidth > 527
        ? "110rem"
        : innerWidth > 500
        ? "95rem"
        : innerWidth > 440
        ? "92rem"
        : innerWidth > 339
        ? "90rem"
        : "95rem",
    
  });

   const StyledAdventureExperienceTitle = styled("h3", {
     color: "black",
     position: "relative",
     fontSize: innerWidth > 440 ? "2.5rem" : "2rem",
     top: ".5rem",
     zIndex: 3,
     left: innerWidth > 722 ? "5.5rem" : innerWidth > 526 ? "4rem" : "2.5rem",
     fontFamily: "Raleway",
     width: innerWidth > 722 ? "80vw" : innerWidth > 351 ? "78vw" : "80vw",
   });

   const StyledDividerBoxOne = styled("div", {
     position: "absolute",
     display: "flex",
     left: "5vw",
     zIndex: 5,
   });

   const StyledDividerBoxTwo = styled("div", {
     position: "relative",
     display: "flex",
     top: "0rem",
     left: innerWidth > 722 ? "5.5rem" : innerWidth > 526 ? "4rem" : "2.5rem",
     width: innerWidth > 526 ? "25rem" : "15rem",
   });

   const StyledDescriptionBox = styled("div", {
     color: "black",
     left: innerWidth > 722 ? "5.5rem" : innerWidth > 526 ? "4rem" : "2.5rem",
     position: "absolute",
     top: innerWidth > 485 ? "8rem" : innerWidth > 440 ? "11rem" : innerWidth > 388 ? "7rem" : "9rem",
     width: innerWidth > 768 ? "85vw" : "75vw",
     height: "auto",
     backgroundColor: "#F6F6F6",
     display: "flex",
     alignContent: "center",
   });

   const StyledDescriptionText = styled("p", {
     color: "black",
     fontSize: innerWidth > 440 ? "1.3rem" : "1.1rem",
     display: "flex",
     justifyContent: "center",
     alignContent: "center",
     lineHeight: innerWidth > 722 ? "calc(1rem + (4rem - 1.5vw))" : "2.4rem",
     fontFamily: "Raleway",
   });

  const dislayDesktop = () => {
    return (
      <StyledDesktopAdventureBox>
        <StyledDividerBoxOne>
          <Divider
            sx={{
              width: "90vw",
            }}
          />
        </StyledDividerBoxOne>
        <StyledAdventureExperienceTitle>
          A Unique Adventure
        </StyledAdventureExperienceTitle>
        <StyledDividerBoxTwo>
          <Divider
            sx={{
              width: innerWidth > 526 ? "25rem" : "15rem",
            }}
          />
        </StyledDividerBoxTwo>
        <StyledDescriptionBox>
          <StyledDescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </StyledDescriptionText>
        </StyledDescriptionBox>
        <style global jsx>{`
          .swiper {
            width: 80vw;
            height: 35rem;
            top: 7rem;
          }

          @media (max-width: 1305px) {
            .swiper {
              top: 11rem;
            }
          }

          @media (max-width: 750px) {
            .swiper {
              top: 11rem;
              height: 20rem;
            }
          }

          @media (max-width: 518px) {
            .swiper {
              top: 13rem;
            }
          }

          @media (max-width: 339px) {
            .swiper {
              top: 15rem;
            }
          }

          @media (max-width: 303px) {
            .swiper {
              top: 16rem;
            }
          }

          .swiper-button-next {
            color: white;
          }

          .swiper-button-prev {
            color: white;
          }

          .swiper-pagination-bullet-active {
            background-color: white;
          }

          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }

          .swiper-slide img {
            display: block;
            width: 100%;
            object-fit: cover;
          }

          .swiper {
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450377/fish-holding-7_zgxdch.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450377/fish-holding-6_rmdkrj.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450376/fish-holding-14_ie19jk.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450377/fish-holding-one_qapjpo.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450376/fish-holding-4_nlhi1w.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450376/fish-holding-2_sdrvsm.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-12_fcgjdd.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450376/fish-holding-15_qzoqbh.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-11_b0arj3.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-9_hy2btb.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              quality={100}
              src="https://res.cloudinary.com/dsc1j5xny/image/upload/v1660450378/fish-holding-13_hawysi.jpg"
              alt={"image1"}
            />
          </SwiperSlide>
        </Swiper>
      </StyledDesktopAdventureBox>
    );
  };

  return <div>{dislayDesktop()}</div>;
};

export default Adventure;
