import { Box, Stack, StackProps, styled, Typography } from "@mui/material";
import { ReactNode } from "react";
import LinkNewTab from "../Buttons/LinkNewTab";

const MediaContainer = styled("div")({
  display: "flex",
  flex: 2,
});

const CaptionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  padding: 0,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    padding: "20px",
  },
}));

export interface CaptionedBaseProps extends StackProps {
  children: ReactNode;
  caption: string | ReactNode;
  imgPosition?: "left" | "right";
  links?: { url: string; text: string }[];
  title?: string;
}
export default function CaptionedBase({
  children,
  caption,
  imgPosition = "left",
  links,
  title,
  ...rest
}: CaptionedBaseProps) {
  let direction: StackProps["direction"] = { sm: "column", md: "row" };
  if (imgPosition === "right") {
    direction = { sm: "column", md: "row-reverse" };
  }
  return (
    <Stack display="flex" direction={direction} spacing={5} mx="auto" {...rest}>
      <MediaContainer>{children}</MediaContainer>

      <CaptionContainer textAlign={imgPosition}>
        {!!title && <Typography variant="subtitle1">{title}</Typography>}

        <Typography variant="body2" gutterBottom component="div">
          {caption}
        </Typography>

        {!!links &&
          links.map((link, i) => (
            <Typography key={`link-${i}`} variant="caption">
              <LinkNewTab href={link.url}>{link.text}</LinkNewTab>
            </Typography>
          ))}
      </CaptionContainer>
    </Stack>
  );
}
