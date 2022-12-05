import { Box, Stack, Typography, Link } from "@mui/material";

const TextCard = ({ title, description }) => {
  return (
    <Stack direction="column">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h6">{description}</Typography>
    </Stack>
  );
};

export default TextCard;
