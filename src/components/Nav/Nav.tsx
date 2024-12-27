import { ROLES } from "@/constants/PageContext";
import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const Root = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  padding: "15px",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));

export default function Nav() {
  return (
    <nav>
      <Root maxWidth="lg">
        <Box>
          <Typography variant="h6" component="h1">
            Weichen Qiu
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          {Object.entries(ROLES).map(([role, { short }]) => (
            <Button key={role} variant="text">
              {short}
            </Button>
          ))}
        </Stack>
      </Root>
    </nav>
  );
}
