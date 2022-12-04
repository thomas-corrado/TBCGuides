import { Box, Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const ComeJoinUs = () => {
    const router = useRouter(); 

    return (
      <Box className="come-join-us-outer-box" mb={8}>
        <Stack
          direction="column"
          className="come-join-us-outer-stack"
          spacing={4}
        >
          <Typography className="ready-typography" variant="h2">
            Ready to start your fishing journey?
          </Typography>
          <Button
            className="book-button"
            variant="outlined"
            onClick={() => router.push(`/reservations`)}
          >
            <Typography className="book-button-typography" variant="h4">
              Book a Reservation
            </Typography>
          </Button>
        </Stack>
      </Box>
    );
}

export default ComeJoinUs