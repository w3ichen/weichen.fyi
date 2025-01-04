import {
  DARK_MODE_ROLES,
  PageContext,
  Role,
} from "@/components/Page/PageContext";
import {
  ButtonBase,
  styled,
  Theme,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const StyledTypography = styled(Typography)(
  ({ theme, selected }: { theme?: Theme; selected: boolean }) => ({
    fontFamily: "Georgia !important",
    color: selected
      ? theme?.palette.text.primary
      : theme?.palette.text.disabled,
    position: "relative",
    display: "inline-block",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -3, // Adjust to move the underline lower
      width: selected ? "100%" : 0, // If selected, show full underline, otherwise start at 0
      height: 3, // Thickness of the underline
      backgroundColor: theme?.palette.primary.light,
      transition: "width 0.3s ease", // Transition for width
    },
    "&:hover::after": {
      width: "100%", // On hover, extend the underline to 100% of the text width
    },
  })
);

interface Props {
  role: Role;
  label: string;
}
export default function NavButton({ role, label }: Props) {
  const { role: selectedRole, setRole } = React.useContext(PageContext);
  const { mode, setMode } = useColorScheme();
  const router = useRouter();

  const selected = role === selectedRole;

  const handleClick = () => {
    setRole(role);
    // Set role in url query
    router.push("/?is=" + role, { scroll: false });
    // Set dark mode based on role
    if (DARK_MODE_ROLES.includes(role)) {
      if (mode != "dark") setMode("dark");
    } else {
      if (mode != "light") setMode("light");
    }
  };

  return (
    <ButtonBase disableRipple onClick={handleClick}>
      <StyledTypography variant="subtitle1" selected={selected}>
        {label}
      </StyledTypography>
    </ButtonBase>
  );
}
