import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const itemData = [
  {
    number: 7,
  },
  {
    number: 6,
  },
  {
    number: 14,
  },
  {
    number: 1,
  },
  {
    number: 4,
  },
  {
    number: 2,
  },
  {
    number: 12,
  },
  {
    number: 15,
  },
  {
    number: 11,
  },
  {
    number: 9,
  },
  {
    number: 13,
  },
];

const SliderWrapper = () => {

    return (
      <>
        <style global jsx>{`
          .swiper {
            width: 80vw;
            height: calc((50rem - (30rem - 20vw)));
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
          {itemData.map((item) => {
            return (
              <SwiperSlide key={item.number} className="swiper-slide">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  src={`https://d14drtvwlopsgs.cloudfront.net/fish-holding-${item.number}.jpg`}
                  alt={`item-${item.number}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
}

export default SliderWrapper