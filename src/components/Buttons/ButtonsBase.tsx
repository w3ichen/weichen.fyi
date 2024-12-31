import { Button, ButtonProps, styled } from "@mui/material";
import { ReactNode } from "react";
import LinkNewTab from "./LinkNewTab";

export interface ButtonBaseProps extends ButtonProps {
  href: string;
  children: ReactNode;
}

const StyledButton = styled(Button)(({}) => ({
  whiteSpace: "nowrap",
  margin: "4px",
  textTransform: "none", // Disable uppercase
}));

export default function ButtonBase({
  href,
  children,
  ...rest
}: ButtonBaseProps) {
  return (
    <LinkNewTab href={href} passHref>
      <StyledButton variant="outlined" size="small" {...rest}>
        {children}
      </StyledButton>
    </LinkNewTab>
  );
}
