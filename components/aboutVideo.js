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
  marginTop: "4rem"
});

const StyledInnerBox = styled(Box, {
  position: "relative",
  height: "100%",
  width: "95vw",
  display: "table",
});

const AboutVideo = () => {
    return (
      <StyledOuterBox className="outerbox">
        <style global jsx>{`
          html {
            min-height: 100%;
            height: 100%;
          }

          body {
            height: 100%;
            margin: 0;
          }

          .outerbox {
            display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
            display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
            display: -ms-flexbox; /* TWEENER - IE 10 */
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-flex-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            z-index: 999;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 8px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }

          .innerbox {
            padding: 8px;
            min-height: 10px;
            min-width: 10px;
            margin: auto;
            background-color: #fff;
            border-radius: 8px;
            border: 1px solid #a5a5a5;
            position: relative;
          }
        `}</style>
        <StyledInnerBox className="innerbox">
          <div
            className="videoBox"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              overflow: "hidden",
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
                display: "table-cell",
                verticalAlign: "middle",
                overflow: "hidden",
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