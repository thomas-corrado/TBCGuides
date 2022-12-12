import { Button, Typography, Box } from "@mui/material";

const LoadCollapse = ({ title, show, setShow }) => {
  return (
    <Box mt={5} mb={6} >
      <Button
        onClick={() => setShow(!show)}
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
        <Typography color="black">
          {title}{" "}
        </Typography>
      </Button>
    </Box>
  );
};

export default LoadCollapse;
