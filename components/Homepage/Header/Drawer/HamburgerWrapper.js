import { IconButton } from "@mui/material";
import Hamburger from "hamburger-react";

const HamburgerWrapper = ({ isOpen, setOpen }) => {
 return (
   <IconButton
     size="large"
     aria-label="menu-icon"
     aria-controls="menu-appbar"
     aria-haspopup="true"
     disableTouchRipple
     className="hamburger-icon"
     sx={{
       color: isOpen === true ? "#596d90" : "white",
       "&:hover": { backgroundColor: "transparent" },
     }}
   >
     <Hamburger toggled={isOpen} toggle={setOpen} />
   </IconButton>
 );
}

export default HamburgerWrapper