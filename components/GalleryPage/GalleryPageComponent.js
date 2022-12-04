import {
  Box,
  Stack,
} from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../Homepage/Contact/ContactInfo"

const GalleryPageComponent = () => {
    return (
      <>
        <Stack className="about-stack" direction="column" >
          <NavigationBarNonHome pages={pages} />
        </Stack>
        <ContactInfo />
      </>
    );
}

export default GalleryPageComponent

const pages = ["home", "about", "reservations"];