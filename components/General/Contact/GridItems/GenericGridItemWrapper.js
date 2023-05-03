import Link from "next/link";
import { Stack, Typography, Grid } from "@mui/material";

const GenericGridItemWrapper = ({ items }) => {

  return (
    <Grid
      item
      container
      lg={3}
      sm={12}
      xs={12}
      sx={{
        justifyContent: { lg: "center" },
        paddingLeft: { xs: "5vw" },
      }}
    >
      <Stack direction="column">
        {items.map((itemDescription) => (
          <Typography
            variant="h7"
            className={
              itemDescription === "About" ||
              itemDescription === "Reservations" ||
              itemDescription === "Explore" ||
              itemDescription === "Gallery"
                ? "contact-item-underlined"
                : "contact-item"
            }
            key={itemDescription}
          >
            {itemDescription === "About" ||
            itemDescription === "Reservations" ||
            itemDescription === "Explore" ||
            itemDescription === "Gallery" ? (
              <Link href={itemDescription.toLowerCase()}>
                {itemDescription}
              </Link>
            ) : (
              itemDescription
            )}
          </Typography>
        ))}
      </Stack>
    </Grid>
  );
};

export default GenericGridItemWrapper; 