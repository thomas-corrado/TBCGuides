import { Stack, Box, Divider } from "@mui/material";

const TestimonialHeader = () => {
    return (
    <Stack
        sx={{
        width: "100vw",
        alignItems: "center",
        }}
        direction="column"
        spacing={3}
    >
        <Box
        sx={{
            width: "100vw",
            textAlign: "center",
            fontSize: "2rem",
        }}
        >
        Loved by <br /> Every Client
        </Box>

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

export default TestimonialHeader