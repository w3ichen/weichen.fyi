import { styled } from "@mui/material";
import CaptionedBase, { CaptionedBaseProps } from "./CaptionedBase";

const StyledIframe = styled("iframe")({
  width: "100%",
  height: "300px",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "30px",
  maxHeight: "300px",
});

interface Props extends Omit<CaptionedBaseProps, "children"> {
  src: string;
}
export default function CaptionedIframe({ src, ...rest }: Props) {
  /**
   * allowFullScreen: Allows the iframe to be displayed in full screen mode.
   * frameBorder: Removes the border around the iframe.
   * allow: Allows the iframe to use certain features like accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture, and web-share.
   * referrerPolicy: Specifies which referrer information to send when fetching the iframe.
   */
  return (
    <CaptionedBase {...rest}>
      <StyledIframe
        src={src}
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </CaptionedBase>
  );
}
