import { Stack, Typography, CircularProgress, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Script from "next/script";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import ReservationForm from "./ReservationForm";

const ReservationsPageComponent = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    let reloadTimeout;
    if (widgetLoaded) {
      const timer = setTimeout(() => {
        setTimerFinished(true);
      }, 3000); // 3 seconds delay
      return () => clearTimeout(timer); // Cleanup timer on unmount
    } else {
      reloadTimeout = setTimeout(() => {
        if (!widgetLoaded) {
          window.location.reload();
        }
      }, 5000); // 10 seconds timeout
    }

    return () => clearTimeout(reloadTimeout); // Cleanup timeout on unmount
  }, [widgetLoaded]);

  return (
    <>
      <Stack>
        <NavigationBarNonHome pages={pages} />
        <Typography
          variant="h4_explore"
          sx={{
            width: "90vw",
            textAlign: "center",
            display: "flex",
            alignSelf: "center",
          }}
          mt={6}
          mb={-3}
        >
          To instantly book, please use the widget below and follow a few simple
          steps. If you prefer an old school over the phone experience, and a
          friends and family discount, please give us a call at your
          convenience.
        </Typography>
        {!widgetLoaded || !timerFinished ? (
          <>
            <div
              style={{
                width: "100%",
                height: "25rem",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                sx={{
                  alignSelf: "center",
                  mb: 10,
                }}
                color="secondary"
              />
            </div>
          </>
        ) : (
          ""
        )}
        <div
          className="mb_widget"
          data-id="dAAhRqPu8QTQ"
          style={{ display: widgetLoaded && timerFinished ? "block" : "none" }}
        ></div>
        <Script
          src="https://widget.mallardbay.com/index.js"
          onLoad={() => setWidgetLoaded(true)}
        />

        <Typography
          variant="h7_reservations"
          sx={{
            width: "90vw",
            textAlign: "center",
            display: "flex",
            alignSelf: "center",
          }}
          mt={-3}
          mb={5}
        >
          All reservations require a 50% security deposit of the cost of the
          trip. This security deposit becomes non-refundable 14 days preceding
          the scheduled fishing date. Inclement weather days will be
          rescheduled. The guide reserves the right to cancel any trip due to
          weather conditions, or mechanical failures. If the guide cancels the
          trip for any reason mentioned above, the customer&#39;s deposit shall
          be refunded or credited to another reservation date if desired. All
          deposits are forfeited after one year.
        </Typography>
        <Typography
          variant="h4_reservations"
          sx={{
            textAlign: "center",
            display: "flex",
            alignSelf: "center",
            alignItems: "center",
          }}
          mt={0}
          mb={5}
        >
          Gift certificates available for any occasion, call to order!
        </Typography>
        
      </Stack>
      <ContactInfo />
    </>
  );
};

export default ReservationsPageComponent;

const pages = ["about", "services", "explore"];
