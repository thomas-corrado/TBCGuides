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
        <meta name="theme-color" content="#000000"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <ReservationsPageComponent/>
    </div>
  );
}
