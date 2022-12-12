import { Stack, Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";

const Gear = () => {
    return (
      <ThemeProvider theme={GearTheme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            backgroundColor: "#D9D9D9",
          }}
          mt={3}
        >
          <Box sx={{ width: { xs: "80vw", sm: "85vw" } }} mt={6} mb={6}>
            <Stack direction="column">
              <Typography variant="h3">Gear</Typography>
              <Typography variant="h5" mt={2}>
                TBC guides will provide everything you need for your experience;
                however, if you are looking to add anything to your tackle box,{" "}
                <Link href="https://www.curated.com/e/mike.blatt" className="curated">
                  click here
                </Link>{" "}
                and Mike can help you out.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    );
}

export default Gear 

const GearTheme = createTheme({
  typography: {
    h3: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc(2.5vmin + 4vmax - 1vw)",
    },
    h5: {
      fontFamily: ["belda-normal"].join(","),
      fontSize: "calc((3vmin + 4.5vmax - 2vw)/2)",
      lineHeight: "calc((3vmin + 4.5vmax - 1.75vw))",
    },
  },
});