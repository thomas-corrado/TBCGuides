import Divider from "@mui/material/Divider";

const DividerWrapper = ({ widthVar="" }) => {

    return (
      <Divider
        sx={{
          width: widthVar,
        
        }}
      />
    );
}

export default DividerWrapper