import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";


const HeaderBarPageButtons = ({ pages }) => {
    const router = useRouter();

    return (
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          fontFamily: "Antonio",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => router.push(`/${page}`)}
            sx={{
              my: 2,
              color: "white",
              display: "block",
              fontFamily: "Antonio",
            }}
            disableRipple
          >
            <Typography
              variant="h4"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Antonio",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {page}
            </Typography>
          </Button>
        ))}
      </Box>
    );
};

export default HeaderBarPageButtons;
