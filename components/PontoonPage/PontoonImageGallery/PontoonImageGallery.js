import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";


const PontoonImageGallery = () => {
    const matchDownMd = useMediaQuery('(min-width:600px)');

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
          cols={matchDownMd ? 2 : 1}
          sx={{
            overflow: "hidden",
            width: "90vw",
          }}
          variant="masonry"
        >
          {itemData.map((item) => (
            <Box
              key={item.number}
              sx={{
                width: { xs: "90vw", sm: "100%", md: "100%", lg: "100%" },
              }}
              // data-aos="fade-up"
            >
              <ImageListItem>
                <Image
                  src={`https://s3.amazonaws.com/tbcguides.fish/Pontoon-${item.number}.jpeg`}
                  alt={`${item.description}`}
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

export default PontoonImageGallery

const itemData = [
  {
    number: 1,
    description:
      "middle-aged man sitting on boat, wearing sunglasses, wearing a baseball hat, smiling, and holding a fish vertically",
  },
  {
    number: 2,
    description:
      "middle-aged man on one knee, wearing a grey jacket with red sweatshirt, wearing a baseball UVM hat, smiling, and holding a fish horizontally",
  },
  {
    number: 3,
    description:
      "middle-aged man starnding in water, wearing a green jacket, wearing a baseball hat with sunglasses on top, biting a fishing rod handle, and holding a fish horizontally",
  },
  {
    number: 4,
    description:
      "middle-aged man standing on a pontoon boat, wearing a blue sweatshirt, wearing a baseball hat, wearing sunglasses, biting a cigar, and holding a fish horizontally",
  },
  {
    number: 5,
    description:
      "middle-aged man standing beside a river, wearing a winter green jacket, wearing a winter hat, wearing sunglasses, smiling, and holding a fish horizontally",
  },
  {
    number: 6,
    description:
      "middle-aged man standing on a frozen lake, wearing a winter green jacket with hood up, smiling, and holding a fish horizontally",
  },
  {
    number: 7,
    description:
      "Man standing on a red and white pontoon boat in the middle of a foggy lake ",
  },
  {
    number: 8,
    description:
      "red and white pontoon boat hitched to a white chevrolet truck with a white truck cap",
  },
];
