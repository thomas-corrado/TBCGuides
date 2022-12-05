import { Box } from "@mui/material";

const ImageWrapper = ({ children }) => {
  return (
    <Box className="michael-image-box-one" mb={3}>
      <Box className="michael-image-box-two">{children}</Box>
    </Box>
  );
};

export default ImageWrapper