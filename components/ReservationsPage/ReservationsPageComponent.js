import { Stack } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
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

const pages = ["about", "pontoon", "explore", "gallery"];
