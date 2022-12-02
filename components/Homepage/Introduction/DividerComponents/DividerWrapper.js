import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

const DividerWrapper = ({ widthVar="" }) => {

    return (
      <Box
        sx={{
          height: "2.5rem",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <Divider
          sx={{
            width: widthVar,
            backgroundColor: "white",
          }}
        />
      </Box>
    );
}

export default DividerWrapper