import { Box, Stack } from "@mui/system"
import HeaderTitle from "../TextComponents/HeaderTitle"
import DividerWrapper from "../DividerComponents/DividerWrapper"
import DescriptionText from "../TextComponents/DescriptionText"

const ImageAndDividerAndText = ({ headerTitle, descriptionText, children }) => {
    return (
      <Stack mb={1}>
        <Box className="image-and-divider-outer-box">
          <HeaderTitle title={headerTitle} />
        </Box>

        <Stack
          className="image-and-divider-stack"
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