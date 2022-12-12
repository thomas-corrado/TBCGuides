import { Divider, Box } from "@mui/material";

const GreyDivider = () => {
    return (
      <Box mt={5} mb={5} sx={{ width: "100%", display: "flex", alignItems: "center"}}>
        <Divider  sx={{ width: "100%", color: "grey" }}></Divider>
      </Box>
    );
}

export default GreyDivider