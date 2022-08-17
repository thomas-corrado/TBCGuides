import * as React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../../components/navBar";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";


export default function ReservationsPage() {

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
  var submitDate 

  function consolidateData(inFirstName, inLastName, inEmail, inPhone, inGuests, inDate) {

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
    });
  }


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
      <NavBar />
      <form style={{ top: "10rem", position: "absolute" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <TextField
            label="First Name"
            variant="filled"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Last Name"
            variant="filled"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Email"
            variant="filled"
            type="email"
            required
            value={varEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Phone Number"
            variant="filled"
            type="phone"
            required
            value={varPhone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Number of Guests"
            variant="filled"
            type="guests"
            required
            value={varGuests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <TextField
            className="dateBox"
            margin="normal"
            label="Date"
            variant="filled"
            type="date"
            required
            value={varDate}
            onChange={(e) => setDate(e.target.value)}
            sx={{
              width: { sm: 200, md: 200 },
              "& .MuiInputBase-root": {
                height: 100,
              },
              paddingBottom: "1rem",
            }}
          />

          <Button
            sx={{ backgroundColor: "black", color: "white" }}
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
            <p style={{ padding: 0, margin: 0, fontFamily: "Raleway"}}>Submit</p>
          </Button>
        </Box>
      </form>
    </div>
  );
}
