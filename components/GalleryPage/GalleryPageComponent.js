import { Stack } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import ImageListGallery from "./ImageListGallery";

const GalleryPageComponent = () => {
  return (
    <>
      <Stack className="about-stack" direction="column">
        <NavigationBarNonHome pages={pages} />
        <ImageListGallery />
      </Stack>
      <ContactInfo />
    </>
  );
};

export default GalleryPageComponent;

const pages = ["about", "reservations", "boats", "explore"];
