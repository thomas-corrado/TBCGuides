import Document, { Html, Head, Main, NextScript } from "next/document";
import CircularProgress from "@mui/material/CircularProgress";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="English">
        <Head>
          <meta
            name="google-site-verification"
            content="EM19wPbtiFI0glqYg6zFRnKZLLSWg5hPKLGg4HmegVI"
          />
          <meta
            name="description"
            content="Upper Valley of Vermont and New Hampshire’s Premier Licensed Fishing Guide Service: Bass Boat, Kayak, Ice, Fly, and Kayak, Open Everyday from 7AM to 7PM, Helping Others Become Lifelong Anglers"
          ></meta>
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
            href="https://fonts.googleapis.com/css2?family=livory&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=livory:wght@600&display=optional"
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
        </Head>
        <body>
          <div id="globalLoader">
            <CircularProgress />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
