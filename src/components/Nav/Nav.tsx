import { ROLES } from "@/components/Page/PageContext";
import { Stack, styled, Typography } from "@mui/material";
import NavButton from "./NavButton";
import Link from "next/link";

const Root = styled("nav")(({ theme }) => ({
  position: "sticky",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 40px",
  flexDirection: "row",
  gap: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Translucent background
  height: "fit-content",
  zIndex: 5,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    padding: "15px",
  },
}));

const ButtonsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  width: "fit-content",
  [theme.breakpoints.down("md")]: {
    gap: "10px",
    width: "100%",
    justifyContent: "center",
  },
}));

export default function Nav() {
  return (
    <Root>
      <Link href="/" passHref style={{ color: "inherit" }}>
        <Stack direction="row" gap={0.5}>
          <Typography variant="h5" fontWeight={1000} fontFamily="Georgia">
            weichen
          </Typography>
          <Typography variant="h5" fontWeight={400} fontFamily="Georgia">
            qiu
          </Typography>
        </Stack>
      </Link>
      <ButtonsContainer>
        {Object.values(ROLES).map((role) => (
          <NavButton key={role} role={role} label={role} />
        ))}
      </ButtonsContainer>
    </Root>
  );
}
