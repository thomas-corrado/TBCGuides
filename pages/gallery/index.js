import * as React from "react";
import NavBar from "../../components/navBar";
import ImageListWrapper from "../../components/imageList";

export default function GalleryPage() {
  return (
    <div>
        <NavBar/>
        <style global jsx> 
        {`

          html {
            background-color: black
          }
        `}

        </style>
        <ImageListWrapper/>
    </div>
  )
}
