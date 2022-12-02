import { Box, Stack } from "@mui/system"
import HeaderTitle from "../TextComponents/HeaderTitle"
import DividerWrapper from "../DividerComponents/DividerWrapper"
import DescriptionText from "../TextComponents/DescriptionText"

const ImageAndDividerAndText = ({ headerTitle, descriptionText, children }) => {
    return (
      <Stack mb={1}>
        <Box
          style={{
            display: "flex",
            width: "100vw",
            height: "auto",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <HeaderTitle title={headerTitle} />
        </Box>

        <Stack
          sx={{
            position: "relative",
            left: "10vw",
            width: "90vw",
          }}
          mb={2}
        >
          <Stack direction="column" mb={-1}>
            <DividerWrapper widthVar="calc(10rem + 15vw)" />
          </Stack>
          <DescriptionText text={descriptionText} />
        </Stack>

        {children}
      </Stack>
    );
}

export default ImageAndDividerAndText