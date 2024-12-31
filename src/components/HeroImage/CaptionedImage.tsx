import { styled, Theme } from "@mui/material";
import CaptionedBase, { CaptionedBaseProps } from "./CaptionedBase";

const StyledImage = styled("img")(
  ({ unconstrained }: { theme?: Theme; unconstrained: boolean }) => ({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: unconstrained ? "0px" : "30px",
    maxHeight: unconstrained ? "unset" : "300px",
  })
);

interface Props extends Omit<CaptionedBaseProps, "children"> {
  src: string;
  unconstrained?: boolean; // Remove the max-height constraint and border-radius
}
export default function CaptionedImage({
  src,
  unconstrained = false,
  ...rest
}: Props) {
  return (
    <CaptionedBase {...rest}>
      <StyledImage src={src} unconstrained={unconstrained} />
    </CaptionedBase>
  );
}
