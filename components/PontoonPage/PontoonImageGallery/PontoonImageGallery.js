import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";


const PontoonImageGallery = ({ image_array, image_prelim, image_format }) => {
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
          {image_array.map((item) => (
            <Box
              key={item.number}
              sx={{
                width: { xs: "90vw", sm: "100%", md: "100%", lg: "100%" },
              }}
              // data-aos="fade-up"
            >
              <ImageListItem>
                <Image
                  src={`https://s3.amazonaws.com/tbcguides.fish/${image_prelim}${item.number}.${image_format}`}
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


