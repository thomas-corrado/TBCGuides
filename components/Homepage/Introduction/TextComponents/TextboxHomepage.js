import { Box } from "@mui/material";

const TextBoxHomePage = ({children}) => {
  return (
    <Box
      sx={{
        position: "relative",
        left: "10vw",
        width: "90vw", 
        padding: 0, 
        margin: 0, 
      }}
      className="homepage-text-box"
    >
     {children}
    </Box>
  );
};

export default TextBoxHomePage;
