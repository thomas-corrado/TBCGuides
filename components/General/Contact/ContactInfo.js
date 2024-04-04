import { Box, Grid } from "@mui/material";
import GenericGridItemWrapper from "./GridItems/GenericGridItemWrapper";
import MadeBy from "./GridItems/MadeBy";
import BusinessHours from "./GridItems/BusinessHours";

const ContactInfo = () => {
    return (
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#596d90",
        }}
      >
        <Grid
          container
          direction="row"
          rowSpacing={4}
          sx={{
            width: "90vw",
          }}
          mt={4}
          mb={4}
        >
          <MadeBy descriptionOne="Made by Tommy Corrado" />

          {generics.map((item) => (
            <GenericGridItemWrapper key={item} items={item} />
          ))}

          <BusinessHours />
        </Grid>
      </Box>
    );
}

export default ContactInfo

const generics = [
  ["Home", "About", "Reservations", "Services", "Explore", "Gallery"],
  [
    "4 Hunter Ln,",
    "Hanover, NH 03755",
    "(603)-266-8883",
    "tbcguides@gmail.com",
  ],
];
