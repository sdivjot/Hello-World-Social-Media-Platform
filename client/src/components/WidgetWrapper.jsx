import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "3rem 3rem 1.5rem 3rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "2rem",
}));

export default WidgetWrapper;
