import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

import { Stack, Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const SuccessDialog = ({ show, setShow }) => {

    const handleClose = () => {
      setShow(false);
    };

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Stack
          direction="column"
          sx={{
            width: "100%",
            alignItems: "center",
            display: "flex",
          }}
          spacing={3}
        >
          <DoneIcon style={{ color: "#4BB543", fontSize: "8rem" }} />

          <DialogContentText
            id="alert-dialog-description"
            sx={{ textAlign: "center" }}
          >
            Thank you for making a reservation with TBC Guides! Mike will be in
            touch with you shortly! If you have any questions, feel free to
            email Mike at tbcguides@gmail.
          </DialogContentText>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;

