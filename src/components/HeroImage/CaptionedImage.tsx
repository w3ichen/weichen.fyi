import { styled, Theme } from "@mui/material";
import CaptionedBase, { CaptionedBaseProps } from "./CaptionedBase";
import { ImgHTMLAttributes } from "react";

export const CAP_IMG_MAX_HEIGHT = 300;
export const StyledImage = styled("img")(
  ({ theme, unconstrained }: { theme?: Theme; unconstrained: boolean }) => ({
    width: "100%",
    height: "auto",
    margin: "auto",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: unconstrained ? "0px" : "30px",
    maxHeight: unconstrained ? "unset" : CAP_IMG_MAX_HEIGHT + "px",
    [theme!.breakpoints.down("md")]: {
      width: "100% !important",
    },
  })
);

interface Props extends Omit<CaptionedBaseProps, "children"> {
  src: string;
  unconstrained?: boolean; // Remove the max-height constraint and border-radius
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
}
export default function CaptionedImage({
  src,
  unconstrained = false,
  imgProps = {},
  ...rest
}: Props) {
  return (
    <CaptionedBase {...rest}>
      <StyledImage src={src} unconstrained={unconstrained} {...imgProps} />
    </CaptionedBase>
  );
}
