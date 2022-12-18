import * as React from "react";
import Head from "next/head";
import ReservationsPageComponent from "../../components/ReservationsPage/ReservationsPageComponent";


export default function ReservationsPage() {
 

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
        <title>Reservations</title>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/tbcguides.fish/Homepage_2.jpeg"
        />
        <meta name="theme-color" content="#FFFFFF"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <ReservationsPageComponent />
    </div>
  );
}
