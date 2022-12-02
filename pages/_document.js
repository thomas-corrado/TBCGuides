import Document, { Html, Head, Main, NextScript } from "next/document";
import CircularProgress from "@mui/material/CircularProgress";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>
            
          </style>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=livory&display=fallback"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=livory:wght@600&display=fallback"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/nff0pei.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/nff0pei.css"
          ></link>
        </Head>
        <body>
          <div id={"globalLoader"}>
            <CircularProgress sx={{ color: "black" }} />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
