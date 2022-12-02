
import "../styles/globals.css";
import "../styles/homepage.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "belda-normal",
    ].join(","),
  },
});

const StyledLoadingScreen = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fff",
  position: "absolute",
  zIndex: "8",
  position: "fixed",
});

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      (url === router.asPath || router.asPath === "/") &&
      setTimeout(() => {
        setLoading(false);
      }, 950);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div>
        <StyledLoadingScreen />
        <Box sx={{ width: "100%", top: "50vh", position: "absolute" }}>
          <CircularProgress sx={{ color: "black" }} />
        </Box>
      </div>
    )
  );
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
