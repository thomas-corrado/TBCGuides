import { Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";

const StepperCard = ({ description, writer}) => {
  return (
    <>
      <Card sx={{ height: 425 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {description}
          </Typography>
          <Typography
            variant="h6"
            
            sx={{ textAlign: "center" }}
          >
            {writer}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default StepperCard;
