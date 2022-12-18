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
                  src={`https://s3.amazonaws.com/tbcguides.fish/fish-holding-${item.number}.jpg`}
                  alt={`https://s3.amazonaws.com/tbcguides.fish/fish-holding-${item.number}.jpg`}
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
    description: "Man in red shirt holding two fish while smiling",
  },
  {
    number: 2,
    description: "Man in white shirt holding one fish while smiling in kayak",
  },
  {
    number: 3,
    description:
      "Man in hat and patterned shirt holding one fish while smiling in kayak",
  },
  {
    number: 4,
    description:
      "Woman in purple jacket holding one fish while smiling in kayak",
  },
  {
    number: 5,
    description:
      "Two young girls holding one fish together while smiling in kayak",
  },
  {
    number: 6,
    description:
      "Woman in black jacket holding one fish while smiling in kayak",
  },
  {
    number: 7,
    description:
      "Man in green shirt and american hat holding one fish while smiling in kayak",
  },
  {
    number: 8,
    description:
      "Man in patterned shirt and fish hat holding one fish while smiling in kayak",
  },
  {
    number: 9,
    description:
      "Man in grey jacket and flip flops holding one fish while smiling in kayak",
  },
  {
    number: 10,
    description:
      "Woman in blue Adidas hat holding one fish while smiling in kayak",
  },
  {
    number: 11,
    description:
      "Young man in grey sweatshirt holding one fish while smirking in kayak",
  },
  {
    number: 12,
    description:
      "Young man in white sweatshirt holding one fish while smiling in kayak",
  },
  {
    number: 13,
    description:
      "Man in white shirt and glasses holding one fish while smirking in kayak",
  },
  {
    number: 14,
    description: "Two red kayaks on lake",
  },
  {
    number: 15,
    description:
      "Man in white sweatshirt and grey Under Armour hat holding one fish while smiling in kayak",
  },
  {
    number: 16,
    description:
      "Man in blue T-shirt and fedora holding one fish while smiling in kayak",
  },
  {
    number: 17,
    description:
      "Young man in red T-shirt and beige hat holding one fish while smiling in kayak",
  },
  {
    number: 18,
    description:
      "Young woman in white tank top holding one fish while smiling on lake shore",
  },
  {
    number: 19,
    description:
      "Young man in grey T-shirt and large sun hat holding one fish while smiling in kayak",
  },
  {
    number: 20,
    description:
      "Older man in white shirt and beige American hat holding one fish while smiling on boat",
  },
  {
    number: 21,
    description:
      "Man in grey and black quarter-zip a holding one fish while smiling on boat",
  },
  {
    number: 22,
    description:
      "Boy #1 with a scarf holding a fish on a frozen lake surrounded by other boys while smiling",
  },
  {
    number: 23,
    description:
      "Boy #2 with a scarf and an LL Bean hat holding a fish on a frozen lake surrounded by other boys  while smiling",
  },
  {
    number: 24,
    description:
      "Boy #3 with a scarf and an LL Bean hat holding a fish on a frozen lake surrounded by other boys  while smiling",
  },
  {
    number: 25,
    description:
      "Man with orange hat holding a fish on a frozen lake while smiling",
  },
  {
    number: 58,
    description:
      "Young man wearing a white shirt and a red life-jacket holding a fish while smiling on a kayak",
  },
  {
    number: 27,
    description:
      "Girl with a balaclava holding a fish on a frozen lake surrounded by other children",
  },

  {
    number: 29,
    description:
      "Middle-aged man in a beige jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 30,
    description:
      "Middle-aged woman in an orange jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 31,
    description:
      "Older woman in a purple jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 32,
    description:
      "Older man in a green jacket and blue balaclava holding a fish on a frozen lake while smiling",
  },
  {
    number: 33,
    description:
      "Middle-aged man in a red jacket and grey hat holding a fish on a frozen lake while smiling",
  },
  {
    number: 34,
    description:
      "Middle-aged person in a blue jacket and grey hat holding a fish on a frozen lake while smiling",
  },
  {
    number: 36,
    description:
      "Middle-aged man in a red-and-black flannel and black hat holding a fish on a kayak while smiling",
  },
  {
    number: 28,
    description:
      "Middle-aged woman in a purple jacket holding a fish on a frozen lake while smiling",
  },
  {
    number: 35,
    description:
      "Young girl in a warm jacket and pink sweatshirt holding a fish on a frozen lake while smiling",
  },

  {
    number: 37,
    description:
      "Two men on a kayak; one man on the right is holding a fish and one man on the left is sitting beside him",
  },
  {
    number: 38,
    description:
      "Older man in purple shirt holding a fish while smiling on a boat",
  },
  {
    number: 39,
    description:
      "Woman in white grey shirt holding one fish while smiling in kayak",
  },
  {
    number: 40,
    description:
      "One woman on the left in a kayak while smiling and holding a fishing rod; one woman on the right in a kayakk while smiling and holding a fish",
  },
  {
    number: 41,
    description:
      "Young woman in Washington Capitals hat and cheetah-print jacket holding one fish while smiling in kayak",
  },
  {
    number: 42,
    description:
      "Older woman in a flannel jacket holding one fish while smiling",
  },
  {
    number: 43,
    description:
      "Woman in a black tank top and black and white hat holding one fish while smirking",
  },
  {
    number: 44,
    description:
      "Young woman in a black jacket and purple life-kacjet holding one fish in a kayak while smirking",
  },
  {
    number: 45,
    description:
      "Middle-aged man in a black jacket and jeans holding one fish in a kayak while smirking",
  },
  {
    number: 46,
    description:
      "Middle-aged man in a grey fleece and black sunglasses holding one fish in a kayak",
  },
  {
    number: 47,
    description:
      "Boy wearing grey pants holding one fish while smiling in a kayak",
  },
  {
    number: 48,
    description:
      "Middle-aged woman in a grey jacket and green hat holding one fish while smiling in a kayak",
  },
  {
    number: 49,
    description:
      "Man in a black jacket and navy hat holding one fish while smiling in a kayak",
  },
  {
    number: 50,
    description:
      "Man in a black jacket, San Diego hat, and light blue jeans holding one fish while smiling in a kayak",
  },
  {
    number: 51,
    description:
      "Fish being held out of water with Jackson Kayak text on kayak",
  },
  {
    number: 52,
    description:
      "Michael Blatt holding fish out of water in a kayak while looking away",
  },
  {
    number: 53,
    description:
      "Michael Blatt holding fish out of water in a kayak while looking forward",
  },
  {
    number: 55,
    description: "Fish in the water with its mouth open",
  },
  {
    number: 54,
    description: "Fish in the water with its mouth open",
  },
  {
    number: 57,
    description:
      "Man in a button-down shirt, glasses, and hat holding a wish while smiling on a boat",
  },
  {
    number: 56,
    description:
      "Woman wearing black jacket, white vest, white hat, and black gloves holding a fish on a frozen lake",
  },
  {
    number: 26,
    description: "Two young girls in large coats holding a fish while smiling",
  },
];
