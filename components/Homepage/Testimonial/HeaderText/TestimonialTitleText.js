import { Stack, Typography, Divider } from "@mui/material";

const TestimonialTitleText = () => {
    return (
      <Stack
        sx={{
          width: "100vw",
          alignItems: "center",
        }}
        direction="column"
        spacing={3}
      >
        <Typography
        variant="h4"
        className="testimonial-title-text"
        >
          Loved by <br /> Every Client
        </Typography>

        <Divider
          sx={{
            width: "15vw",
            backgroundColor: "black",
            alignItems: "center",
          }}
        />
      </Stack>
    );
}

export default TestimonialTitleText;