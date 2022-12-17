import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const SliderWrapper = () => {

    return (
      <>
        <style global jsx>{`
          .swiper {
            width: 80vw;
            height: calc((50rem - (30rem - 20vw)));
            margin-left: auto;
            margin-right: auto;
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
                  // src={`https://d14drtvwlopsgs.cloudfront.net/fish-holding-${item.number}.jpg`}
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