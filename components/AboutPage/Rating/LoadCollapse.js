import { Button, Typography, Box } from "@mui/material";

const LoadCollapse = ({ title, show, setShow, counter, counterChange }) => {


  
  return (
    <Box mt={5} mb={6} ml={{ xs: 1, sm: 0}}>
      <Button
        onClick={() => counterChange()}
        variant="contained"
        disableElevation
        sx={{
            borderRadius: 0, 
          backgroundColor: "#D9D9D9",
          "&:hover": {
            backgroundColor: "#D9D9D9",
          },
        }}
      >
        <Typography variant="h8" color="secondary">
          {title}
        </Typography>
      </Button>
    </Box>
  );
};

export default LoadCollapse;
