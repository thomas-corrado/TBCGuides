import * as React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../../components/navBar";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@washingtonpost/wpds-ui-kit";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Head from "next/head";

const StyledOuterBox = styled(Box, {
  width: "100vw",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f6f6f6",
  
});

const StyledHeaderBox = styled(Box, {
  position: "absolute",
  top: "4.5rem",
  color: "black",
  fontFamily: "Raleway",
  width: "90vw",
  display: "flex",
  justifyContent: "center",
  textAlign: "center"
  
});

const StyledFormBox = styled(Box, {
  position: "relative",
  backgroundColor: "white",
  height: "auto",
  width: "20rem",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "3rem",
  paddingTop: "3rem",
  borderRadius: "2rem", 
});

export default function ReservationsPage() {
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [varEmail, setEmail] = useState("");
  const [varPhone, setPhone] = useState("");
  const [varGuests, setGuests] = useState("");
  const [varDate, setDate] = useState("");

  var submitFirstName; 
  var submitLastName; 
  var submitEmail; 
  var submitPhone; 
  var submitGuests; 
  var submitDate; 
  var submitEmoji = "❌";

  function consolidateData(inFirstName, inLastName, inEmail, inPhone, inGuests, inDate) {

    setState({ open: true, vertical: "bottom", horizontal: "center" });

    submitFirstName = inFirstName; 
    submitLastName = inLastName; 
    submitEmail = inEmail; 
    submitPhone = inPhone; 
    submitGuests = inGuests; 
    submitDate = inDate; 

    submitHandler({
      date: submitDate,
      email: submitEmail,
      first: submitFirstName,
      phone: submitPhone,
      guests: submitGuests,
      last: submitLastName,
      emoji: submitEmoji
    });

    setFirstName("")
    setLastName("");
    setEmail("");
    setPhone("");
    setGuests("");
    setDate("");
  }

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  async function submitHandler(data) {
    const response = await fetch("/api/form", {
    		method: "POST",
        	body: JSON.stringify(data),
        	headers: {
        		'Content-Type': 'application/json',
      		},
    	})
  }

  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>
      </Head>
      <div
        style={{
          height: "auto",
          backgroundColor: "#f6f6f6",
          position: "relative",
          paddingBottom: "4rem",
        }}
      >
        <NavBar />
        <style global jsx>{`
          html {
            background-color: green;
          }

          body {
            background-color: #f6f6f6;
          }

          .formBox {
            top: 10rem;
          }

          @media (max-width: 596px) {
            .formBox {
              top: 12rem;
            }
          }
        `}</style>
        <StyledOuterBox>
          <StyledHeaderBox>
            <h1 style={{}}>Ready to start your next adventure?</h1>
          </StyledHeaderBox>
          <StyledFormBox className="formBox">
            <form>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    float: "left",
                    width: "100%",
                    fontSize: "1.5rem",
                    paddingBottom: ".5rem",
                    direction: "row",
                    display: "flex",
                  }}
                >
                  <div style={{ paddingTop: "2px" }}>
                    <AssignmentIcon />
                  </div>

                  <p style={{ padding: 0, margin: 0 }}>
                    &nbsp;&nbsp;Make a Reservation
                  </p>
                </Box>
                <TextField
                  label="First Name"
                  variant="standard"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      width: 200,
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  label="Last Name"
                  variant="standard"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      width: 200,
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  label="Email"
                  variant="standard"
                  type="email"
                  required
                  value={varEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      width: 200,
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  label="Phone Number"
                  variant="standard"
                  type="phone"
                  required
                  value={varPhone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      width: 200,
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  label="Number of Guests"
                  variant="standard"
                  type="guests"
                  required
                  value={varGuests}
                  onChange={(e) => setGuests(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      width: 200,
                    },
                  }}
                />
                <TextField
                  className="dateBox"
                  margin="normal"
                  label="Preferred Date"
                  variant="standard"
                  type="date"
                  required
                  value={varDate}
                  onChange={(e) => setDate(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 100,
                      width: 200,
                    },
                    paddingBottom: "1rem",
                  }}
                />

                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    ":hover": {
                      backgroundColor: "green",
                      boxShadow: "none",
                    },
                  }}
                  onClick={() =>
                    consolidateData(
                      firstName,
                      lastName,
                      varEmail,
                      varPhone,
                      varGuests,
                      varDate
                    )
                  }
                >
                  <p style={{ padding: 0, margin: 0, fontFamily: "Raleway" }}>
                    Submit
                  </p>
                </Button>
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  message="Your reservation has been submitted! Mike will be in touch soon!"
                  key={vertical + horizontal}
                  sx={{
                    "& .MuiSnackbarContent-root": {
                      backgroundColor: "green",
                      fontFamily: "Raleway",
                    },
                  }}
                />
              </Box>
            </form>
          </StyledFormBox>
        </StyledOuterBox>
      </div>
    </div>
  );
}
