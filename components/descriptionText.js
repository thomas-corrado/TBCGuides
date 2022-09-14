import { Box } from "@mui/system";

const DescriptionText = ({ text="" }) => {

    return (
      <Box sx={{ width: "80vw" }}>
        <Box
          sx={{
            color: "black",
            fontSize: "1.3rem",
            fontFamily: "Raleway",
            display: "flex",
            alignContent: "center",
            lineHeight: "3rem",
            top: "15px", 
            position: "relative"
          }}
        >
          {text}
        </Box>
      </Box>
    );
}

export default DescriptionText