import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, TextField, Button, Typography, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  CreateIcon,
  EmailIcon,
  PhoneIcon,
  PersonIcon,
  CalendarTodayIcon,
} from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import SuccessDialog from "./SuccessDialog";


const ReservationForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [varName, setName] = useState("");
  const [varEmail, setEmail] = useState("");
  const [varPhone, setPhone] = useState("");
  const [varGuests, setGuests] = useState("");
  const [varDate, setDate] = useState("");
  const [show, setShow] = useState(false)

  var submitName;
  var submitEmail;
  var submitPhone;
  var submitGuests;
  var submitDate;
  var submitEmoji = "❌";
  var calendarType = 'text'

  function consolidateData(inName, inEmail, inPhone, inGuests, inDate) {
    submitName = inName;
    submitEmail = inEmail;
    submitPhone = inPhone;
    submitGuests = inGuests;
    submitDate = inDate;

    submitHandler({
      date: submitDate,
      email: submitEmail,
      name: submitName,
      phone: submitPhone,
      guests: submitGuests,
      emoji: submitEmoji,
    });

    sendMail({
      date: submitDate,
      email: submitEmail,
      name: submitName,
      phone: submitPhone,
      guests: submitGuests,
    });

    setName("");
    setEmail("");
    setPhone("");
    setGuests("");
    setDate("");
    setShow(true)
  }

  async function submitHandler(data) {
    const response = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const sendMail = async (data) => {
    try {
      const response = await fetch("/api/aws-ses", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const body = await response.json();
      if (body.ok) {
        setMessage("Successfully send test mail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fields = [
    {
      header: TextField,
      label: "Name",
      type: "text",
      value: varName,
      required: true,
      shrink: false,
      functionName: setName,
      icon: <CreateIcon />,
      position: "right",
    },
    {
      header: TextField,
      label: "Email",
      type: "email",
      value: varEmail,
      required: true,
      shrink: false,
      functionName: setEmail,
      icon: <EmailIcon />,
      position: "left",
    },
    {
      header: TextField,
      label: "Phone Number",
      type: "phone",
      value: varPhone,
      required: false,
      shrink: false,
      functionName: setPhone,
      icon: <PhoneIcon />,
      position: "right",
    },
    {
      header: TextField,
      label: "Number of Guests",
      type: "guests",
      value: varGuests,
      required: false,
      shrink: false,
      functionName: setGuests,
      icon: <PersonIcon />,
      position: "left",
    },
    {
      header: DatePicker,
      label: "Preferred Date",
      type: calendarType,
      value: varDate,
      required: false,
      shrink: true,
      functionName: setDate,
      icon: <CalendarTodayIcon />,
      position: "right",
    },
  ];

  return (
    <Box className="reservation-outside-box" mt={6} mb={6}>
      <Stack
        direction="column"
        className="reservation-stack"
        mt={5}
        data-aos="fade-up"
      >
        <Typography
          variant="h2_reservations"
          color="secondary"
          mt={5}
          mb={1}
        >
          Make a Reservation
        </Typography>
        <SuccessDialog show={show} setShow={setShow} />
        <form>
          <Grid container columnSpacing={3} mb={3}>
            {fields.map((item) => {
              return (
                <Grid
                  key={item.label}
                  container
                  item
                  lg={6}
                  md={12}
                  mt={2}
                  sx={{
                    justifyContent: {
                      lg: item.position,
                      md: "center",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <item.header
                        placeholder={item.label}
                        variant="standard"
                        hiddenLabel
                        type={item.type}
                        required={item.required}
                        value={item.value}
                        onChange={(e) =>
                          item.functionName(
                            item.label !== "Preferred Date"
                              ? e.target.value
                              : e !== null
                              ? e._d
                              : ""
                          )
                        }
                        sx={{ padding: "1rem" }}
                        className="reservation-text-field"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            helperText={item.label}
                            variant="standard"
                            error={false}
                            style={{
                              "& .MuiCalendarPicker": {
                                fontFamily: "belda-normal",
                                color: "red",
                              },
                              padding: "1rem",
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box mb={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                consolidateData(varName, varEmail, varPhone, varGuests, varDate)
              }
            >
              <Typography variant="h6_reservations" color="primary">
                Submit
              </Typography>
            </Button>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};

export default ReservationForm;
