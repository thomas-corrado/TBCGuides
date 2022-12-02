import { Divider } from "@mui/material"
import ImageAndDividerAndText from "./ImageComponents/ImageAndDividerAndText";
import Image from "next/image";
import ImageWrapper from "./ImageComponents/ImageWrapper";
import SliderWrapper from "./ImageComponents/Slider";

const Introduction = () => {

    return (
      <>
        <div>
          <ImageAndDividerAndText
            headerTitle="Touring Led by Mike Blatt"
            descriptionText="Mike Blatt is an extremely experienced fisherman with fully certified
        training in Wilderness First Response, as well as Swiftwater Rescue."
          >
            <ImageWrapper>
              <Image
                priority
                layout="fill"
                objectFit="cover"
                quality={100}
                src="https://d14drtvwlopsgs.cloudfront.net/bio.jpg"
                alt="Harpoon"
              />
            </ImageWrapper>
          </ImageAndDividerAndText>
        </div>

        <Divider
          sx={{
            width: "90vw",
            backgroundColor: "white",
          }}
        />

        <div>
          <ImageAndDividerAndText
            headerTitle="An Unforgettable Adventure"
            descriptionText="Guests are given a chance to discover more about themselves and the
          world around them. In turn, they become life-long fishers."
          >
            <ImageWrapper>
              <SliderWrapper />
            </ImageWrapper>
          </ImageAndDividerAndText>
        </div>
      </>
    );

}

export default Introduction