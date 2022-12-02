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
          >
            <Typography
              variant="h4"
              className="tbc-logo"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
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
