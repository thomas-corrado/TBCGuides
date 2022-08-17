import * as React from "react";
import { Box } from "@mui/system";
import { styled } from "@washingtonpost/wpds-ui-kit";

const StyledOuterBox = styled(Box, {
  width: "100vw",
  height: "calc(100vh - 4rem)",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: "red", 
});

const StyledInnerBox = styled(Box, {
  position: "relative",
  height: "100%",
  width: "95vw",
  display: "table",
  overflow: "hidden",
});

const AboutVideo = () => {
    return (
      <StyledOuterBox>
        <StyledInnerBox>
          <div
            className="videoBox"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              overflow: "hidden",
              marginBottom: "-4rem",
            }}
          >
            <video
              controls
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "calc(100vh - 4rem)",
                display: "block",
                overflow: "hidden",
                padding: 0,
                margin: 0,
              }}
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dsc1j5xny/video/upload/v1660687489/tbc_guide_services__michael_blatt__-_v3_720p_lyrudn.mp4#t=0.5"
                type="video/mp4"
              />
            </video>
          </div>
        </StyledInnerBox>
      </StyledOuterBox>
    );
}

export default AboutVideo

{/* <div
       style={{
         width: "100vw",
         overflow: "scroll",
         height: "calc(100vh - 4rem)",
       }}
     >
       <style global jsx>{`
         html {
           background-color: rgb(0, 105, 62);
         }
       `}</style>
       <div
        
         style={{
           height: "100%",
           overflow: "auto",
         }}
       >
         <div style={{ whiteSpace: "nowrap", height: "100%" }}>
           <div
             style={{
               display: "flex",
               height: "100%",
             }}
           >
             <div
               style={{
                 float: "left",
                 paddingTop: "5px",
                 height: "100%",
                 marginLeft: "1rem",
               }}
             >
               
                   <div
                     key={index}
                     style={{
                       float: "left",
                       width: `calc(${
                         mobileView ? photo.widthMobile : photo.widthDesktop
                       })`,
                       height: "100%",
                       position: "relative",
                       marginRight: "1rem",
                     }}
                   >
                     <Image
                       priority
                       objectFit="contain"
                       layout="fill"
                       quality={100}
                       src={require(`../public/${photo.file}`)}
                       alt="fallout"
                     />
                   </div>
                 
             </div>
           </div>
         </div>
       </div>
     </div> */}