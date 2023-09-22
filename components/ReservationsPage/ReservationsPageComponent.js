import { Stack, Typography } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import ReservationForm from "./ReservationForm";

const ReservationsPageComponent = () => {
  return (
    <>
      <Stack>
        <NavigationBarNonHome pages={pages} />
        <ReservationForm />
        <Typography variant="h7_reservations" sx={{ width: "90vw", textAlign: 'center', display: 'flex', alignSelf: 'center'}} mb={5}>
          All reservations require a 50% security deposit of the cost of the
          trip. This security deposit becomes non-refundable 14 days preceding
          the scheduled fishing date. Inclement weather days will be
          rescheduled. The captain reserves the right to cancel any trip due to
          weather conditions, or mechanical failures. If the captain cancels the
          trip for any reason mentioned above, the customer&#39;s deposit shall
          be refunded or credited to another reservation date if desired. All
          deposits are forfeited after one year.
        </Typography>
      </Stack>
      <ContactInfo />
    </>
  );
};

export default ReservationsPageComponent;

const pages = ["about", "boats", "explore", "gallery"];
