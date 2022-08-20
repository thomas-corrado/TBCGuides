import * as React from "react";
import NavBar from "../../components/navBar";
import ImageListWrapper from "../../components/imageList";
import Head from "next/head";

export default function GalleryPage() {
  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>
      </Head>
        <NavBar/>
        <style global jsx> 
        {`

          html {
            background-color: yellow
          }
        `}

        </style>
        <ImageListWrapper/>
    </div>
  )
}
