import { styled } from "@mui/material";
import CaptionedBase, { CaptionedBaseProps } from "./CaptionedBase";

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "30px",
  maxHeight: "300px",
});

interface Props extends Omit<CaptionedBaseProps, "children"> {
  src: string;
}
export default function CaptionedImage({ src, ...rest }: Props) {
  return (
    <CaptionedBase {...rest}>
      <StyledImage src={src} />
    </CaptionedBase>
  );
}
