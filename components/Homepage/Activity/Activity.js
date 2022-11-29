import { Stack } from "@mui/material"
import TopImage from "./TopImage/TopImage";
import ActivityText from "./Text/ActivityText";
import BottomImage from "./BottomImage/BottomImage";

const Activity = () => {
    return (
      <Stack sx={{ width: "100vw" }}>
        <TopImage/>
        <ActivityText/>
        <BottomImage/>
        
      </Stack>
    );
}

export default Activity 