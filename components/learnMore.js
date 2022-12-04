import * as React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

const LearnMore = () => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleOpen();
      setTimeout(function () {
        handleClose();
      }, 5000);
    }
  }, []);

  function handleOpen() {
    setTransition(() => TransitionRight);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ top: "5rem", position: "absolute" }}>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Watch the Video to Learn More About Mike!"
        key={transition ? transition.name : ""}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "blue",
            fontFamily: "livory",
          },
        }}
      />
    </div>
  );
};

export default LearnMore;
