import Document, { Html, Head, Main, NextScript } from "next/document";
import loader from "./loader";
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
            {`body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.loader {
 --uib-size: 80px;
 --uib-speed: 1.55s;
 --uib-color: black;
 --uib-line-weight: 5px;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 height: var(--uib-line-weight);
 width: var(--uib-size);
 border-radius: calc(var(--uib-line-weight) / 2);
 overflow: hidden;
 transform: translate3d(0, 0, 0);
 
}
.loader::before {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 100%;
 background-color: var(--uib-color);
 opacity: 0.1;
}

@keyframes spin {
 0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }
 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }
}`}
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
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap"
            rel="stylesheet"
          />
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
