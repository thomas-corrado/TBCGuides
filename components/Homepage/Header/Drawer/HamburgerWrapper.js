import { IconButton } from "@mui/material";
import Hamburger from "hamburger-react";

const HamburgerWrapper = ({ isOpen, setOpen, colorOne, colorTwo }) => {
 return (
   <IconButton
     size="large"
     aria-label="menu-icon"
     aria-controls="menu-appbar"
     aria-haspopup="true"
     disableTouchRipple
     className="hamburger-icon"
    
     sx={{
       zIndex: 4,
       color: isOpen === true ? colorTwo : colorOne,
       "&:hover": { backgroundColor: "transparent" },
     }}
   >
     <Hamburger toggled={isOpen} toggle={setOpen} />
   </IconButton>
 );
}

export default HamburgerWrapper