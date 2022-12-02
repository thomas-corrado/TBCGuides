import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

const DividerWrapper = ({ widthVar="" }) => {

    return (
      <Box
className="divider-wrapper-box"
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