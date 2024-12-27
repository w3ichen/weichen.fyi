import { Role, ROLES } from "@/constants/PageContext";
import { Box, Stack, styled, Typography } from "@mui/material";
import NavButton from "./NavButton";

const Root = styled("nav")(({ theme }) => ({
  position: "sticky",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 40px",
  flexDirection: "row",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    padding: "15px",
  },
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Translucent background
}));

const ButtonsContainer = styled(Stack)(({}) => ({
  overflowY: "hidden",
  overflowX: "auto",
  alignContent: "center",
  justifyContent: "center",
}));

export default function Nav() {
  return (
    <Root>
      <Box>
        <Typography variant="h6" component="h1">
          Weichen Qiu
        </Typography>
      </Box>
      <ButtonsContainer direction="row" spacing={3}>
        {Object.entries(ROLES).map(([role, { short }]) => (
          <NavButton key={role} role={role as Role} label={short} />
        ))}
      </ButtonsContainer>
    </Root>
  );
}
