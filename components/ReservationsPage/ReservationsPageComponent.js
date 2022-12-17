import { Box, Stack } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../Homepage/Contact/ContactInfo";
import ReservationForm from "./ReservationForm";

const ReservationsPageComponent = () => {
  return (
    <>
      <Stack className="about-stack">
        <NavigationBarNonHome pages={pages} />
        <ReservationForm />
      </Stack>
      <ContactInfo />
    </>
  );
};

export default ReservationsPageComponent;

const pages = ["home", "about", "gallery"];
